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
class CustomError extends Error {
    constructor(response, code) {
        super();
        this.response = response;
        this.config = {};
        this.code = code;
        this.request = {};
    }
}

const mockSetResponse = jest.fn();
const mockSetError = jest.fn();
jest.mock('../states/useLocationSearchApiResponse', () => () => ({
    setResponse: mockSetResponse,
    setError: mockSetError,
}));

const renderSearchLocationApiService = () =>
    renderHook(() => SearchLocationApi());

// eslint-disable-next-line no-console
console.log = jest.fn();

jest.mock('../Config', () => ({
    WEATHER_API_KEY: 'key',
}));

jest.mock('../states/useUserInput', () => () => ({
    userInput: 'delhi',
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

    it('should set api response to response and set error as false when api call is success', async () => {
        const { result } = renderSearchLocationApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.SearchLocationApi({ isMocked: false });
        });

        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(mockSuccessResponse);
        expect(mockSetError).toBeCalledTimes(1);
        expect(mockSetError).toHaveBeenCalledWith(false);
    });

    it('should set response as undefined , set error as true and show error popup when api call fails', async () => {
        const consoleLogSpy = jest.spyOn(console, 'log');
        const { result } = renderSearchLocationApiService();
        const error = new CustomError({
            response: {
                status: 403,
                data: {},
                headers: {},
            },
            config: {},
            code: 'SOME_ERROR_CODE',
            request: {},
        });
        mockCall.mockRejectedValueOnce(error.response);

        await act(async () => {
            await result.current.SearchLocationApi({ isMocked: false });
        });

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(
            'Error in fetching locations data:',
            {
                response: {
                    status: 403,
                    data: {},
                    headers: {},
                },
                config: {},
                code: 'SOME_ERROR_CODE',
                request: {},
            },
        );
        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(undefined);
        expect(mockShowPopup).toHaveBeenCalledTimes(1);
        expect(mockShowPopup).toHaveBeenCalledWith({
            description: 'Error fetching requested location data',
            onClose: expect.any(Function),
            title: 'Error',
        });
        expect(mockSetError).toBeCalledTimes(1);
        expect(mockSetError).toHaveBeenCalledWith(true);

        mockShowPopup.mock.calls[0][0].onClose();

        expect(mockRemovePopup).toHaveBeenCalledTimes(1);
    });

    it('should set response as undefined , set error description to returned error and show error popup when api call fails returning an error', async () => {
        const consoleLogSpy = jest.spyOn(console, 'log');
        const { result } = renderSearchLocationApiService();
        const error = new CustomError({
            response: {
                status: 403,
                data: {
                    error: {
                        message: 'API key invalid',
                    },
                },
                headers: {},
            },
            config: {},
            code: 'SOME_ERROR_CODE',
            request: {},
        });
        mockCall.mockRejectedValueOnce(error.response);

        await act(async () => {
            await result.current.SearchLocationApi({ isMocked: false });
        });

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(
            'Error in fetching locations data:',
            {
                response: {
                    status: 403,
                    data: {
                        error: {
                            message: 'API key invalid',
                        },
                    },
                    headers: {},
                },
                config: {},
                code: 'SOME_ERROR_CODE',
                request: {},
            },
        );
        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(undefined);
        expect(mockShowPopup).toHaveBeenCalledTimes(1);
        expect(mockShowPopup).toHaveBeenCalledWith({
            description: 'API key invalid',
            onClose: expect.any(Function),
            title: 'Error',
        });
        expect(mockSetError).toBeCalledTimes(1);
        expect(mockSetError).toHaveBeenCalledWith(true);

        mockShowPopup.mock.calls[0][0].onClose();

        expect(mockRemovePopup).toHaveBeenCalledTimes(1);
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
