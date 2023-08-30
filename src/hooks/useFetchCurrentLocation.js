import { useCallback } from 'react';
import Geolocation from 'react-native-geolocation-service';
import useUserPermissions from '../states/useUserPermissions';
import useCurrentLocation from '../states/useCurrentLocation';

const useFetchCurrentLocation = () => {
    const { locationPermission } = useUserPermissions();
    const { currentLocation, setCurrentLocation } = useCurrentLocation();
    const fetchCurrentLocation = useCallback(async () => {
        if (locationPermission === 'granted') {
            if (currentLocation === undefined) {
                Geolocation.getCurrentPosition(
                    position => {
                        setCurrentLocation(
                            `${position.coords.latitude},${position.coords.longitude}`,
                        );
                    },
                    error => {
                        console.log(error.code, error.message);
                        setCurrentLocation('unavailable');
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 15000,
                        maximumAge: 10000,
                    },
                );
            }
        } else {
            console.log('permission denied for location');
        }
    }, [currentLocation, locationPermission, setCurrentLocation]);
    return { fetchCurrentLocation };
};

export default useFetchCurrentLocation;
