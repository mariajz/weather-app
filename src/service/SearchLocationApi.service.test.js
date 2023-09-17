import { renderHook, act } from '@testing-library/react-hooks';
import GetLocationApi from '../api/weather-api/get-locations/Api';
import { mockSuccessResponse } from '../api/weather-api/get-locations/mocks';
import SearchLocationApi from './SearchLocationApi.service';

const mockCall = jest.fn();
jest.mock('../api/weather-api/get-locations/Api', () => {
    return jest.fn().mockImplementation(() => ({
        call: mockCall,
    }));
});

const mockSetResponse = jest.fn();
jest.mock('../states/useLocationSearchApiResponse', () => () => ({
    setResponse: mockSetResponse,
}));

const renderSearchLocationApiService = () =>
    renderHook(() => SearchLocationApi());

// eslint-disable-next-line no-console
console.error = jest.fn();

jest.mock('../states/useUserInput', () => () => ({
    userInput: 'delhi',
}));

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: mockNavigate,
    }),
}));

const mockShowPopup = jest.fn();
const mockRemovePopup = jest.fn();
jest.mock('../service/EventEmitter.service', () => ({
    showPopup: params => mockShowPopup(params),
    removePopup: () => mockRemovePopup(),
}));

describe('Tests for SearchLocationApi.service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call SearchLocationApi with correct query params', async () => {
        const { result } = renderSearchLocationApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.SearchLocationApi({ isMocked: false });
        });

        expect(GetLocationApi).toHaveBeenCalledTimes(1);
        expect(GetLocationApi).toHaveBeenCalledWith({
            queryParams: {
                key: 'key',
                q: 'delhi',
            },
        });
    });

    it('should set api response to response when api call is success', async () => {
        const { result } = renderSearchLocationApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.SearchLocationApi({ isMocked: false });
        });

        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(mockSuccessResponse);
    });

    it('should set response as undefined and show error popup when api call fails', async () => {
        const consoleErrorSpy = jest.spyOn(console, 'error');
        const { result } = renderSearchLocationApiService();
        const error = new Error('Error in fetching locations data');
        mockCall.mockRejectedValueOnce(error);

        await act(async () => {
            await result.current.SearchLocationApi({ isMocked: false });
        });

        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error in fetching locations data:',
            error,
        );
        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(undefined);
        expect(mockShowPopup).toHaveBeenCalledTimes(1);
        expect(mockShowPopup).toHaveBeenCalledWith({
            description: 'Error fetching requested location data',
            onClose: expect.any(Function),
            title: 'Error',
        });

        mockShowPopup.mock.calls[0][0].onClose();

        expect(mockRemovePopup).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenLastCalledWith({
            name: 'ExitScreen',
            params: {},
        });
    });
});

describe('Tests for SearchLocationApi.service with mock data', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should set mock api response to response', async () => {
        const { result } = renderSearchLocationApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.SearchLocationApi({ isMocked: true });
        });

        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(mockSuccessResponse);
    });
});
