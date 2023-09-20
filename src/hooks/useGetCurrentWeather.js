import { useCallback } from 'react';
import ForecastApiService from '../service/ForecastApi.service';

const useGetCurrentWeather = () => {
    const { ForecastApi } = ForecastApiService();

    const handleFetchWeather = useCallback(async () => {
        // change isMocked to true to call mock api
        await ForecastApi({ isMocked: false });
    }, [ForecastApi]);

    return { handleFetchWeather };
};

export default useGetCurrentWeather;
