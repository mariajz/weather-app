import { atom, useAtom } from 'jotai';

const forecastApiResponseAtom = atom({});

const useForecastApiResponse = () => {
    const [response, setResponse] = useAtom(forecastApiResponseAtom);

    return {
        response,
        setResponse,
    };
};
export default useForecastApiResponse;
