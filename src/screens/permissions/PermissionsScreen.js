import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import useGetPermissions from '../../hooks/useGetPermissions';
import useUserPermissions from '../../states/useUserPermissions';
import { PermissionsWrapper } from './PermissionsScreen.style';

const PermissionsScreen = () => {
    const { requestLocationPermission } = useGetPermissions();
    const { locationPermission } = useUserPermissions();
    const navigation = useNavigation();

    useEffect(() => {
        if (locationPermission === 'unavailable') {
            requestLocationPermission();
        }
    }, [locationPermission, requestLocationPermission]);

    useEffect(() => {
        if (locationPermission === 'granted') {
            navigation.navigate({
                name: 'ContentLoaderScreen',
                params: {},
            });
        }
    });

    return (
        <>
            <If condition={locationPermission === 'denied'}>
                <PermissionsWrapper>
                    <Text testID="text">
                        To continue, please grant location permission. You can
                        do this by going to your device's settings and enabling
                        location access for the app.
                    </Text>
                </PermissionsWrapper>
            </If>
        </>
    );
};

export default PermissionsScreen;
