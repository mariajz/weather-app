import { useCallback } from 'react';
import SearchLocationApiService from '../service/SearchLocationApi.service';

const useGetAllLocations = () => {
    const { SearchLocationApi } = SearchLocationApiService();

    const handleFetchLocationData = useCallback(async () => {
        // change isMocked to false to call actual api
        await SearchLocationApi({ isMocked: true });
    }, [SearchLocationApi]);

    return { handleFetchLocationData };
};

export default useGetAllLocations;
