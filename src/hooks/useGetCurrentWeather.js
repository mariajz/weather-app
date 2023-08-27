import { useCallback } from 'react';
import ForecastApiService from '../service/ForecastApi.service';

const useGetCurrentWeather = () => {
    const { ForecastApi } = ForecastApiService();

    const handleFetchWeather = useCallback(async () => {
        // change isMocked to false to call actual api
        await ForecastApi({ isMocked: true });
    }, [ForecastApi]);

    return { handleFetchWeather };
};

export default useGetCurrentWeather;
