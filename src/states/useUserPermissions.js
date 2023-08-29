import { atom, useAtom } from 'jotai';

const locationPermissionAtom = atom(false);

const useUserPermissions = () => {
    const [locationPermission, setLocationPermission] = useAtom(
        locationPermissionAtom,
    );

    return {
        locationPermission,
        setLocationPermission,
    };
};
export default useUserPermissions;
