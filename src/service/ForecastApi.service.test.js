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

const renderForecastApiService = () => renderHook(() => ForecastApiService());

// eslint-disable-next-line no-console
console.log = jest.fn();

jest.mock('../states/useCurrentLocation', () => () => ({
    currentLocation: '37.4226711,-122.0849872',
}));

let mockSearchLocation;
jest.mock('../states/useSearchLocation', () => () => ({
    searchLocation: mockSearchLocation,
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

describe('Tests for ForecastApi.service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
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

    it('should set response as undefined and show error popup when api call fails', async () => {
        const consoleLogSpy = jest.spyOn(console, 'log');
        const { result } = renderForecastApiService();
        const error = new Error('Error in fetching forecast data');
        mockCall.mockRejectedValueOnce(error);

        await act(async () => {
            await result.current.ForecastApi({ isMocked: false });
        });

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(
            'Error in fetching forecast data:',
            error,
        );
        expect(mockSetResponse).toHaveBeenCalledTimes(1);
        expect(mockSetResponse).toHaveBeenCalledWith(undefined);
        expect(mockShowPopup).toHaveBeenCalledTimes(1);
        expect(mockShowPopup).toHaveBeenCalledWith({
            description:
                'We have encountered an error while fetching weather details',
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

    it('should search with currentLocation when searchLocation isnt available', async () => {
        mockSearchLocation = '27.4226711,-122.0849872';
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
                q: '27.4226711,-122.0849872',
            },
        });
    });
});

describe('Tests for ForecastApi.service with mock data', () => {
    beforeEach(() => {
        jest.clearAllMocks();
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
