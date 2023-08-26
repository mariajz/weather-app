import { renderHook, act } from '@testing-library/react-hooks';
import useGetCurrentWeather from './useGetCurrentWeather';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks';

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

const renderUseGetCurrentWeatherHook = () =>
    renderHook(() => useGetCurrentWeather());

console.error = jest.fn();

describe('Tests for useGetCurrentWeather', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should start loader before api call and hide it after api call', async () => {
        const { result } = renderUseGetCurrentWeatherHook();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.handleFetchWeather();
        });

        expect(mockShowLoader).toHaveBeenCalledTimes(1);
        expect(mockHideLoader).toHaveBeenCalledTimes(1);
    });

    it('should call CurrentWeatherApi with correct query params and return success response when api call is success', async () => {
        const { result } = renderUseGetCurrentWeatherHook();
        mockCall.mockResolvedValueOnce(mockSuccessResponse);

        await act(async () => {
            await result.current.handleFetchWeather();
        });

        expect(CurrentWeatherApi).toHaveBeenCalledTimes(1);
        expect(CurrentWeatherApi).toHaveBeenCalledWith({
            queryParams: {
                key: 'key',
                days: 14,
                q: '48.8567,2.3508',
            },
        });
        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(mockSuccessResponse);
    });

    it('should call CurrentWeatherApi with correct query params and return error when api call fails', async () => {
        const consoleErrorSpy = jest.spyOn(console, 'error');

        const { result } = renderUseGetCurrentWeatherHook();
        const error = new Error('Error in fetching forecast data');
        mockCall.mockRejectedValueOnce(error);

        await act(async () => {
            await result.current.handleFetchWeather();
        });

        expect(CurrentWeatherApi).toHaveBeenCalledTimes(1);
        expect(CurrentWeatherApi).toHaveBeenCalledWith({
            queryParams: {
                key: 'key',
                days: 14,
                q: '48.8567,2.3508',
            },
        });
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
            'Error in fetching forecast data:',
            error,
        );
    });
});
