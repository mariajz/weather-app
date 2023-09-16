import { atom, useAtom } from 'jotai';

const locationSearchApiResponseAtom = atom([]);

const useLocationSearchApiResponse = () => {
    const [response, setResponse] = useAtom(locationSearchApiResponseAtom);

    return {
        response,
        setResponse,
    };
};
export default useLocationSearchApiResponse;
