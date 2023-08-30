import { renderHook, act } from '@testing-library/react-hooks';
import useFetchCurrentLocation from './useFetchCurrentLocation';
import { getCurrentPosition } from 'react-native-geolocation-service';

jest.mock('react-native-geolocation-service', () => ({
    getCurrentPosition: jest.fn(),
}));

const mockSetCurrentLocation = jest.fn();
let mockCurrentLocation;
jest.mock('../states/useCurrentLocation', () => () => ({
    currentLocation: mockCurrentLocation,
    setCurrentLocation: mockSetCurrentLocation,
}));

let mockLocationPermission = 'unavailable';
jest.mock('../states/useUserPermissions', () => () => ({
    locationPermission: mockLocationPermission,
}));

const renderUseFetchCurrentLocationHook = () =>
    renderHook(() => useFetchCurrentLocation());

describe('Tests for useFetchCurrentLocation', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call setLocation with correct latitude and longitude when locationPermission is granted', async () => {
        mockLocationPermission = 'granted';
        const position = {
            coords: {
                latitude: 37.4226711,
                longitude: -122.0849872,
            },
        };
        getCurrentPosition.mockImplementation(successCallback => {
            successCallback(position);
        });

        const { result } = renderUseFetchCurrentLocationHook();

        await act(async () => {
            await result.current.fetchCurrentLocation();
        });

        expect(mockSetCurrentLocation).toHaveBeenCalledTimes(1);
        expect(mockSetCurrentLocation).toHaveBeenCalledWith(
            '37.4226711,-122.0849872',
        );
    });

    it('should not call setLocation when locationPermission is denied', async () => {
        mockLocationPermission = 'denied';
        const { result } = renderUseFetchCurrentLocationHook();

        await act(async () => {
            await result.current.fetchCurrentLocation();
        });

        expect(mockSetCurrentLocation).toHaveBeenCalledTimes(0);
    });

    it('should set current location as unavailable when getCurrentPosition returns error', async () => {
        mockLocationPermission = 'granted';
        const mockError = {
            code: '1',
            message: 'User denied Geolocation',
        };
        getCurrentPosition.mockImplementation((_, errorCallback) => {
            errorCallback(mockError);
        });
        const { result } = renderUseFetchCurrentLocationHook();

        await act(async () => {
            await result.current.fetchCurrentLocation();
        });

        expect(mockSetCurrentLocation).toHaveBeenCalledTimes(1);
        expect(mockSetCurrentLocation).toHaveBeenCalledWith('unavailable');
    });

    it('should not call getCurrentPosition if currentLocation is already set', async () => {
        mockLocationPermission = 'granted';
        mockCurrentLocation = '37.4226711,-122.0849872';
        const { result } = renderUseFetchCurrentLocationHook();

        await act(async () => {
            await result.current.fetchCurrentLocation();
        });

        expect(mockSetCurrentLocation).toHaveBeenCalledTimes(0);
    });
});
