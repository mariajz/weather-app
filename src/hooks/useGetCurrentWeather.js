import { useCallback } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';

const useGetCurrentWeather = () => {
    const handleFetchWeather = useCallback(() => {
        const queryParams = {
            key: 'key',
            q: '48.8567,2.3508',
        };

        new CurrentWeatherApi({ queryParams: queryParams }).call();
    }, []);

    return { handleFetchWeather };
};

export default useGetCurrentWeather;
