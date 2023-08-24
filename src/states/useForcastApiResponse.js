import { atom, useAtom } from 'jotai';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks';

const forcastApiResponseAtom = atom(mockSuccessResponse);

const useForcastApiResponse = () => {
    const [response, setResponse] = useAtom(forcastApiResponseAtom);

    return {
        response,
        setResponse,
    };
};
export default useForcastApiResponse;
