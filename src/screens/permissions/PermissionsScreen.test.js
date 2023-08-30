import { render } from '@testing-library/react-native';
import React from 'react';
import useUserPermissions from '../../states/useUserPermissions';
import PermissionsScreen from './PermissionsScreen';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: mockNavigate,
    }),
}));

jest.mock('../../states/useUserPermissions');

let mockCurrentLocation;
jest.mock('../../states/useCurrentLocation', () => () => ({
    currentLocation: mockCurrentLocation,
}));

const mockRequestLocationPermission = jest.fn();
jest.mock('../../hooks/useGetPermissions', () => () => ({
    requestLocationPermission: mockRequestLocationPermission,
}));

const mockFetchCurrentLocation = jest.fn();
jest.mock('../../hooks/useFetchCurrentLocation', () => () => ({
    fetchCurrentLocation: mockFetchCurrentLocation,
}));

describe('PermissionsScreen', () => {
    beforeEach(() => {
        useUserPermissions.mockImplementation(() => ({
            locationPermission: 'unavailable',
        }));
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render PermissionsScreen', () => {
        const container = render(<PermissionsScreen />);

        expect(container).toMatchSnapshot();
    });

    it('should not navigate to content loader screen and show error message when locationPermission is denied', async () => {
        useUserPermissions.mockImplementation(() => ({
            locationPermission: 'denied',
        }));
        const { getByTestId } = render(<PermissionsScreen />);

        expect(mockNavigate).toHaveBeenCalledTimes(0);
        expect(getByTestId('text').props.children).toStrictEqual(
            "To continue, please grant location permission. You can do this by going to your device's settings and enabling location access for the app.",
        );
    });

    it('should call fetchCurrentLocation when locationPermission is granted', async () => {
        useUserPermissions.mockImplementation(() => ({
            locationPermission: 'granted',
        }));
        render(<PermissionsScreen />);

        expect(mockFetchCurrentLocation).toHaveBeenCalledTimes(1);
    });

    it('should navigate to content loader screen when locationPermission is granted', async () => {
        useUserPermissions.mockImplementation(() => ({
            locationPermission: 'granted',
        }));
        mockCurrentLocation = '37.4226711,-122.0849872';

        render(<PermissionsScreen />);

        expect(mockNavigate).toHaveBeenCalledWith({
            name: 'ContentLoaderScreen',
            params: {},
        });
    });
});
