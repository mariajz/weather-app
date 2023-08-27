import { act, renderHook } from '@testing-library/react-hooks';
import useGetCurrentWeather from './useGetCurrentWeather';

const mockForecastApi = jest.fn();
jest.mock('../service/ForecastApi.service', () => () => ({
    ForecastApi: mockForecastApi,
}));

const renderUseGetCurrentWeatherHook = () =>
    renderHook(() => useGetCurrentWeather());

describe('Tests for useGetCurrentWeather', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call ForecastApi', async () => {
        const { result } = renderUseGetCurrentWeatherHook();

        await act(async () => {
            await result.current.handleFetchWeather();
        });

        expect(mockForecastApi).toHaveBeenCalledTimes(1);
        expect(mockForecastApi).toHaveBeenCalledWith({ isMocked: true });
    });
});
