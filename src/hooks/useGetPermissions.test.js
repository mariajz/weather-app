import { act, renderHook } from '@testing-library/react-hooks';
import useGetPermissions from './useGetPermissions';
import { Platform } from 'react-native';
import { request } from 'react-native-permissions';

const renderUseGetPermissionsHook = () => renderHook(() => useGetPermissions());

const mockSetLocationPermission = jest.fn();
jest.mock('../states/useUserPermissions', () => () => ({
    setLocationPermission: mockSetLocationPermission,
}));

jest.mock('react-native-permissions', () => ({
    request: jest.fn(),
}));

describe('Tests for useGetPermissions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Tests for requestLocationPermission', () => {
        it('should call setLocationPermission with true when location permission is granted', async () => {
            request.mockReturnValue('granted');

            const { result } = renderUseGetPermissionsHook();

            await act(async () => {
                await result.current.requestLocationPermission();
            });

            expect(mockSetLocationPermission).toHaveBeenCalledTimes(1);
            expect(mockSetLocationPermission).toHaveBeenCalledWith(true);
        });

        it('should call setLocationPermission with false when location permission is denied', async () => {
            Platform.OS = 'android';
            request.mockReturnValue('denied');

            const { result } = renderUseGetPermissionsHook();

            await act(async () => {
                await result.current.requestLocationPermission();
            });

            expect(mockSetLocationPermission).toHaveBeenCalledTimes(1);
            expect(mockSetLocationPermission).toHaveBeenCalledWith(false);
        });
    });
});
