import { renderHook, act } from '@testing-library/react-hooks';
import useGetCurrentWeather from './useGetCurrentWeather';
import CurrentWeatherApi from '../api/weather-api/current-weather/Api';

jest.mock('../api/weather-api/current-weather/Api', () => {
    return jest.fn().mockImplementation(() => ({
        call: jest.fn(),
    }));
});

const renderUseGetCurrentWeatherHook = () =>
    renderHook(() => useGetCurrentWeather());

describe('Tests for useGetCurrentWeather', () => {
    it('should call CurrentWeatherApi with correct query params', async () => {
        const { result } = renderUseGetCurrentWeatherHook();

        await act(async () => {
            await result.current.handleFetchWeather();
        });

        expect(CurrentWeatherApi).toHaveBeenCalledTimes(1);
        expect(CurrentWeatherApi).toHaveBeenCalledWith({
            queryParams: {
                key: 'key',
                q: '48.8567,2.3508',
            },
        });
    });
});
