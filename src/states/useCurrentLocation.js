import { atom, useAtom } from 'jotai';

const currentLocationAtom = atom(undefined);

const useCurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useAtom(currentLocationAtom);

    return {
        currentLocation,
        setCurrentLocation,
    };
};
export default useCurrentLocation;
