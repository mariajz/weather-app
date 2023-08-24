import { useCallback } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import useForcastApiResponse from '../states/useForcastApiResponse';

const useGetCurrentWeather = () => {
    const { setResponse } = useForcastApiResponse();

    const handleFetchWeather = useCallback(() => {
        const queryParams = {
            key: 'key',
            q: '48.8567,2.3508',
            days: 14,
        };

        new CurrentWeatherApi({
            queryParams: queryParams,
        })
            .call()
            .then(response => {
                setResponse(response);
            })
            .catch(error => {
                console.error('Error in fetching forecast data:', error);
            });
    }, [setResponse]);

    return { handleFetchWeather };
};

export default useGetCurrentWeather;
