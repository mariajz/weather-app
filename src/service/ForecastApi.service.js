import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks/MockSuccessResponse';
import { showPopup, removePopup } from '../service/EventEmitter.service';
import useCurrentLocation from '../states/useCurrentLocation';
import useSearchLocation from '../states/useSearchLocation';
import useForecastApiResponse from '../states/useForecastApiResponse';
import Config from '../Config';

const ForecastApiService = () => {
    const { setResponse } = useForecastApiResponse();
    const { currentLocation } = useCurrentLocation();
    const { searchLocation } = useSearchLocation();
    const location = searchLocation || currentLocation;
    const navigation = useNavigation();

    const queryParams = {
        key: Config.WEATHER_API_KEY,
        q: location,
        days: 14,
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
                    // eslint-disable-next-line no-console
                    console.log('Error in fetching forecast data:', error);
                    setResponse(undefined);
                    showPopup({
                        title: 'Error',
                        description:
                            error?.response?.data?.error?.message ||
                            'We have encountered an error while fetching weather details',
                        onClose: () => {
                            removePopup();
                            navigation.navigate({
                                name: 'ExitScreen',
                                params: {},
                            });
                        },
                    });
                });
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [setResponse, searchLocation],
    );

    return { ForecastApi };
};

export default ForecastApiService;
