import { useCallback } from 'react';
import GetLocationApi from '../api/weather-api/get-locations/Api';
import { mockSuccessResponse } from '../api/weather-api/get-locations/mocks';
import useLocationSearchApiResponse from '../states/useLocationSearchApiResponse';
import useUserInput from '../states/useUserInput';
import { removePopup, showPopup } from './EventEmitter.service';
import Config from '../Config';

const SearchLocationApiService = () => {
    const { setResponse, setError } = useLocationSearchApiResponse();
    const { userInput } = useUserInput();

    const SearchLocationApi = useCallback(
        async ({ isMocked }) => {
            if (isMocked) {
                setResponse(mockSuccessResponse);
                return;
            }

            const queryParams = {
                key: Config.WEATHER_API_KEY,
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
                    showPopup({
                        title: 'Error',
                        description:
                            error?.response?.data?.error?.message ||
                            'Error fetching requested location data',
                        onClose: () => {
                            removePopup();
                        },
                    });
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [setResponse, userInput],
    );

    return { SearchLocationApi };
};

export default SearchLocationApiService;
