import { atom, useAtom } from 'jotai';

const locationSearchApiResponseAtom = atom(undefined);
const locationSearchApiResponseErrorAtom = atom(undefined);

const useLocationSearchApiResponse = () => {
    const [response, setResponse] = useAtom(locationSearchApiResponseAtom);
    const [error, setError] = useAtom(locationSearchApiResponseErrorAtom);

    return {
        response,
        setResponse,
        error,
        setError,
    };
};
export default useLocationSearchApiResponse;
