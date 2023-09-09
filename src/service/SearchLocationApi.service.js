import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';
import GetLocationApi from '../api/weather-api/get-locations/Api';
import { mockSuccessResponse } from '../api/weather-api/get-locations/mocks';
import { removePopup, showPopup } from './EventEmitter.service';
import useLocationSearchApiResponse from '../states/useLocationSearchApiResponse';
import useSearchLocation from '../states/useSearchLocation';

const SearchLocationApiService = () => {
    const { setResponse } = useLocationSearchApiResponse();
    const { searchLocation } = useSearchLocation();
    const navigation = useNavigation();

    const queryParams = useMemo(
        () => ({
            key: 'key',
            q: searchLocation,
        }),
        [searchLocation],
    );

    const errorPopupProps = {
        title: 'Error',
        description: 'Error fetching requested location data',
        onClose: () => {
            removePopup();
            navigation.navigate({
                name: 'ExitScreen',
                params: {},
            });
        },
    };
    const SearchLocationApi = useCallback(
        async ({ isMocked }) => {
            if (isMocked) {
                setResponse(mockSuccessResponse);
                return;
            }

            await new GetLocationApi({
                queryParams: queryParams,
            })
                .call()
                .then(response => {
                    if (Object.keys(response).length !== 0) {
                        setResponse(response);
                    }
                })
                .catch(error => {
                    console.error('Error in fetching locations data:', error);
                    setResponse(undefined);
                    showPopup(errorPopupProps);
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [errorPopupProps, setResponse],
    );

    return { SearchLocationApi };
};

export default SearchLocationApiService;
