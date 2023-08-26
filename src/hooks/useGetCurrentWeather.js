import { useCallback } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import useForcastApiResponse from '../states/useForcastApiResponse';
import useLoader from '../hooks/useLoader';

const useGetCurrentWeather = () => {
    const { setResponse } = useForcastApiResponse();
    const { showLoader, hideLoader } = useLoader();

    const handleFetchWeather = useCallback(() => {
        const queryParams = {
            key: 'key',
            q: '48.8567,2.3508',
            days: 14,
        };
        showLoader();
        new CurrentWeatherApi({
            queryParams: queryParams,
        })
            .call()
            .then(response => {
                setResponse(response);
                hideLoader();
            })
            .catch(error => {
                console.error('Error in fetching forecast data:', error);
                hideLoader();
            });
    }, [setResponse, showLoader, hideLoader]);

    return { handleFetchWeather };
};

export default useGetCurrentWeather;
