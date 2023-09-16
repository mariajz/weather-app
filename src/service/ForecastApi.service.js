import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks/MockSuccessResponse';
import { showPopup, removePopup } from '../service/EventEmitter.service';
import useCurrentLocation from '../states/useCurrentLocation';
import useSearchLocation from '../states/useSearchLocation';
import useForcastApiResponse from '../states/useForcastApiResponse';

const ForecastApiService = () => {
    const { setResponse } = useForcastApiResponse();
    const { currentLocation } = useCurrentLocation();
    const { searchLocation } = useSearchLocation();
    const location = searchLocation || currentLocation;
    const navigation = useNavigation();

    const queryParams = {
        key: 'key',
        q: location,
        days: 14,
    };

    const errorPopupProps = {
        title: 'Error',
        description:
            'We have encountered an error while fetching weather details',
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
        [setResponse, searchLocation],
    );

    return { ForecastApi };
};

export default ForecastApiService;
