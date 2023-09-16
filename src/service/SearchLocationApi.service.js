import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import GetLocationApi from '../api/weather-api/get-locations/Api';
import { mockSuccessResponse } from '../api/weather-api/get-locations/mocks';
import useLocationSearchApiResponse from '../states/useLocationSearchApiResponse';
import useSearchLocation from '../states/useSearchLocation';
import { removePopup, showPopup } from './EventEmitter.service';

const SearchLocationApiService = () => {
    const { setResponse } = useLocationSearchApiResponse();
    const { searchLocation } = useSearchLocation();
    const navigation = useNavigation();

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

            const queryParams = {
                key: 'key',
                q: searchLocation,
            };

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
