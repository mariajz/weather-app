import { useCallback } from 'react';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import useLoader from '../hooks/useLoader';
import useForcastApiResponse from '../states/useForcastApiResponse';

const useGetCurrentWeather = () => {
    const { setResponse } = useForcastApiResponse();
    const { showLoader, hideLoader } = useLoader();

    const handleFetchWeather = useCallback(async () => {
        const queryParams = {
            key: 'key',
            q: '48.8567,2.3508',
            days: 14,
        };

        showLoader();

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
    }, [hideLoader, setResponse, showLoader]);

    return { handleFetchWeather };
};

export default useGetCurrentWeather;
