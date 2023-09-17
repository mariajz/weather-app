import { atom, useAtom } from 'jotai';

const locationSearchApiResponseAtom = atom(undefined);

const useLocationSearchApiResponse = () => {
    const [response, setResponse] = useAtom(locationSearchApiResponseAtom);

    return {
        response,
        setResponse,
    };
};
export default useLocationSearchApiResponse;
