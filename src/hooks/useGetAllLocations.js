import { useCallback } from 'react';
import getLocationsApi from '../api/weather-api/get-locations/Api';

const useGetAllLocations = () => {
    const handleFetchLocations = useCallback(() => {
        const queryParams = {
            key: 'key',
            q: 'Palakkad',
        };

        new getLocationsApi({ queryParams: queryParams }).call();
    }, []);

    return { handleFetchLocations };
};

export default useGetAllLocations;
