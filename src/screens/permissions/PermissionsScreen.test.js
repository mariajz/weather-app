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

const mockRequestLocationPermission = jest.fn();
jest.mock('../../hooks/useGetPermissions', () => () => ({
    requestLocationPermission: mockRequestLocationPermission,
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

    it('should navigate to content loader screen when locationPermission is granted', async () => {
        useUserPermissions.mockImplementation(() => ({
            locationPermission: 'granted',
        }));
        render(<PermissionsScreen />);

        expect(mockNavigate).toHaveBeenCalledWith({
            name: 'ContentLoaderScreen',
            params: {},
        });
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
});
