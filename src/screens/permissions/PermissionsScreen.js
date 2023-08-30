import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import useGetPermissions from '../../hooks/useGetPermissions';
import useUserPermissions from '../../states/useUserPermissions';
import { PermissionsWrapper } from './PermissionsScreen.style';
import useFetchCurrentLocation from '../../hooks/useFetchCurrentLocation';
import useCurrentLocation from '../../states/useCurrentLocation';

const PermissionsScreen = () => {
    const { requestLocationPermission } = useGetPermissions();
    const { locationPermission } = useUserPermissions();
    const navigation = useNavigation();
    const { fetchCurrentLocation } = useFetchCurrentLocation();
    const { currentLocation } = useCurrentLocation();

    useEffect(() => {
        if (locationPermission === 'unavailable') {
            requestLocationPermission();
        }
    }, [locationPermission, requestLocationPermission]);

    useEffect(() => {
        if (locationPermission === 'granted') {
            fetchCurrentLocation();
        }
    }, [fetchCurrentLocation, locationPermission]);

    useEffect(() => {
        if (currentLocation) {
            navigation.navigate({
                name: 'ContentLoaderScreen',
                params: {},
            });
        }
    }, [currentLocation, navigation]);

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
