import { useCallback, useMemo } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks/MockSuccessResponse';
import useLoader from '../hooks/useLoader';
import useForcastApiResponse from '../states/useForcastApiResponse';
import useCurrentLocation from '../states/useCurrentLocation';

const ForecastApiService = () => {
    const { setResponse } = useForcastApiResponse();
    const { showLoader, hideLoader } = useLoader();
    const { currentLocation } = useCurrentLocation();

    const queryParams = useMemo(
        () => ({
            key: 'key',
            q: currentLocation,
            days: 14,
        }),
        [currentLocation],
    );

    const ForecastApi = useCallback(
        async ({ isMocked }) => {
            showLoader();

            if (isMocked) {
                setResponse(mockSuccessResponse);
                hideLoader();
                return;
            }

            await new CurrentWeatherApi({
                queryParams: queryParams,
            })
                .call()
                .then(response => {
                    if (Object.keys(response).length !== 0) {
                        setResponse(response);
                    }
                    hideLoader();
                })
                .catch(error => {
                    console.error('Error in fetching forecast data:', error);
                    setResponse(undefined);
                    hideLoader();
                    // throw error popup here
                });
        },
        [hideLoader, queryParams, setResponse, showLoader],
    );

    return { ForecastApi };
};

export default ForecastApiService;
