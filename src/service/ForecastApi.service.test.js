import { renderHook, act } from '@testing-library/react-hooks';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks';
import ForecastApiService from './ForecastApi.service';

const mockCall = jest.fn();
jest.mock('../api/weather-api/current-weather/Api', () => {
    return jest.fn().mockImplementation(() => ({
        call: mockCall,
    }));
});

const mockSetResponse = jest.fn();
jest.mock('../states/useForcastApiResponse', () => () => ({
    setResponse: mockSetResponse,
}));

const mockShowLoader = jest.fn();
const mockHideLoader = jest.fn();
jest.mock('../hooks/useLoader', () => () => ({
    showLoader: mockShowLoader,
    hideLoader: mockHideLoader,
}));

const renderForecastApiService = () => renderHook(() => ForecastApiService());

console.error = jest.fn();

jest.mock('../states/useCurrentLocation', () => () => ({
    currentLocation: '37.4226711,-122.0849872',
}));

describe('Tests for ForecastApi.service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should start loader before api call and hide it after api call', async () => {
        const { result } = renderForecastApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.ForecastApi({ isMocked: false });
        });

        expect(mockShowLoader).toHaveBeenCalledTimes(1);
        expect(mockHideLoader).toHaveBeenCalledTimes(1);
    });

    it('should call CurrentWeatherApi with correct query params', async () => {
        const { result } = renderForecastApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.ForecastApi({ isMocked: false });
        });

        expect(CurrentWeatherApi).toHaveBeenCalledTimes(1);
        expect(CurrentWeatherApi).toHaveBeenCalledWith({
            queryParams: {
                key: 'key',
                days: 14,
                q: '37.4226711,-122.0849872',
            },
        });
    });

    it('should set api response to response when api call is success and response isnt empty', async () => {
        const { result } = renderForecastApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.ForecastApi({ isMocked: false });
        });

        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(mockSuccessResponse);
    });

    it('should not set api response to response when api call is success but response is empty', async () => {
        const { result } = renderForecastApiService();
        mockCall.mockResolvedValueOnce({});

        await act(async () => {
            await result.current.ForecastApi({ isMocked: false });
        });

        expect(mockSetResponse).toHaveBeenCalledTimes(0);
    });

    it('should set response as undefined when api call fails', async () => {
        const consoleErrorSpy = jest.spyOn(console, 'error');

        const { result } = renderForecastApiService();
        const error = new Error('Error in fetching forecast data');
        mockCall.mockRejectedValueOnce(error);

        await act(async () => {
            await result.current.ForecastApi({ isMocked: false });
        });

        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error in fetching forecast data:',
            error,
        );
        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(undefined);
    });
});

describe('Tests for ForecastApi.service with mock data', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should start loader before setting response and hide it after setting response', async () => {
        const { result } = renderForecastApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.ForecastApi({ isMocked: true });
        });

        expect(mockShowLoader).toHaveBeenCalledTimes(1);
        expect(mockHideLoader).toHaveBeenCalledTimes(1);
    });

    it('should set mock api response to response', async () => {
        const { result } = renderForecastApiService();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.ForecastApi({ isMocked: true });
        });

        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(mockSuccessResponse);
    });
});
