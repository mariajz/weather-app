import { useCallback } from 'react';
import GetLocationApi from '../api/weather-api/get-locations/Api';
import { mockSuccessResponse } from '../api/weather-api/get-locations/mocks';
import useLocationSearchApiResponse from '../states/useLocationSearchApiResponse';
import useUserInput from '../states/useUserInput';
import { removePopup, showPopup } from './EventEmitter.service';

const SearchLocationApiService = () => {
    const { setResponse, setError } = useLocationSearchApiResponse();
    const { userInput } = useUserInput();

    const errorPopupProps = {
        title: 'Error',
        description: 'Error fetching requested location data',
        onClose: () => {
            removePopup();
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
                q: userInput,
            };

            await new GetLocationApi({
                queryParams: queryParams,
            })
                .call()
                .then(response => {
                    setResponse(response);
                    setError(false);
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log('Error in fetching locations data:', error);
                    setResponse(undefined);
                    setError(true);
                    showPopup(errorPopupProps);
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [setResponse, userInput],
    );

    return { SearchLocationApi };
};

export default SearchLocationApiService;
