import { atom, useAtom } from 'jotai';

const searchLocationAtom = atom(undefined);

const useSearchLocation = () => {
    const [searchLocation, setSearchLocation] = useAtom(searchLocationAtom);

    return {
        searchLocation,
        setSearchLocation,
    };
};
export default useSearchLocation;
