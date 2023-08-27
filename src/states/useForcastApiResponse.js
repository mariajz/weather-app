import { atom, useAtom } from 'jotai';

const forcastApiResponseAtom = atom({});

const useForcastApiResponse = () => {
    const [response, setResponse] = useAtom(forcastApiResponseAtom);

    return {
        response,
        setResponse,
    };
};
export default useForcastApiResponse;
