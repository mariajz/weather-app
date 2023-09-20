import { useCallback } from 'react';
import SearchLocationApiService from '../service/SearchLocationApi.service';

const useGetAllLocations = () => {
    const { SearchLocationApi } = SearchLocationApiService();

    const handleFetchLocationData = useCallback(async () => {
        // change isMocked to true to call mock api
        await SearchLocationApi({ isMocked: false });
    }, [SearchLocationApi]);

    return { handleFetchLocationData };
};

export default useGetAllLocations;
