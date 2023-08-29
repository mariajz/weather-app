import { useCallback } from 'react';
import { Platform } from 'react-native';
import Permissions from 'react-native-permissions';
import useUserPermissions from '../states/useUserPermissions';

const useGetPermissions = () => {
    const { setLocationPermission } = useUserPermissions();

    const requestLocationPermission = useCallback(async () => {
        let permissionStatus;
        if (Platform.OS === 'ios') {
            permissionStatus = await Permissions.request('location');
        } else if (Platform.OS === 'android') {
            permissionStatus = await Permissions.request(
                'android.permission.ACCESS_FINE_LOCATION',
            );
        }
        if (permissionStatus === 'granted') {
            setLocationPermission('granted');
        } else {
            setLocationPermission('denied');
        }
    }, [setLocationPermission]);

    return { requestLocationPermission };
};

export default useGetPermissions;
