import { useCallback } from 'react';
import { Platform } from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import useUserPermissions from '../states/useUserPermissions';

const useGetPermissions = () => {
    const { setLocationPermission } = useUserPermissions();

    const requestLocationPermission = useCallback(async () => {
        const permissionStatus = await request(
            Platform.select({
                android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
                ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            }),
            {
                title: 'Location',
                message: 'Weather App would like access to your location ',
            },
        );

        if (permissionStatus === RESULTS.GRANTED) {
            setLocationPermission(RESULTS.GRANTED);
        } else {
            setLocationPermission(RESULTS.DENIED);
        }
    }, [setLocationPermission]);

    return { requestLocationPermission };
};

export default useGetPermissions;
