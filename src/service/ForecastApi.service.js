import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks/MockSuccessResponse';
import { showPopup, removePopup } from '../service/EventEmitter.service';
import useCurrentLocation from '../states/useCurrentLocation';
import useForcastApiResponse from '../states/useForcastApiResponse';

const ForecastApiService = () => {
    const { setResponse } = useForcastApiResponse();
    const { currentLocation } = useCurrentLocation();
    const navigation = useNavigation();

    const queryParams = useMemo(
        () => ({
            key: 'key',
            q: currentLocation,
            days: 14,
        }),
        [currentLocation],
    );

    const errorPopupProps = {
        title: 'Error',
        description: 'desc',
        onClose: () => {
            removePopup();
            navigation.navigate({
                name: 'ExitScreen',
                params: {},
            });
        },
    };
    const ForecastApi = useCallback(
        async ({ isMocked }) => {
            if (isMocked) {
                setResponse(mockSuccessResponse);
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
                })
                .catch(error => {
                    console.error('Error in fetching forecast data:', error);
                    setResponse(undefined);
                    showPopup(errorPopupProps);
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [errorPopupProps, setResponse],
    );

    return { ForecastApi };
};

export default ForecastApiService;
