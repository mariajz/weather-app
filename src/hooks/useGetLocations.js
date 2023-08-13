import { useCallback } from 'react';
import getLocationsApi from '../api/weatherstack-api/get-locations/Api';

const useGetLocations = () => {
    const handleFetchLocations = useCallback(() => {
        const queryParams = {
            key: 'key',
            q: 'Palakkad',
        };

        new getLocationsApi({ queryParams: queryParams }).call();
    }, []);

    return { handleFetchLocations };
};

export default useGetLocations;
