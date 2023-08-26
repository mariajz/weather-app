import { useCallback } from 'react';
import useLoading from '../states/useLoading';

const useLoader = () => {
    const { setLoading } = useLoading();

    const showLoader = useCallback(() => {
        setLoading(true);
    }, [setLoading]);

    const hideLoader = useCallback(() => {
        setLoading(false);
    }, [setLoading]);

    return { showLoader, hideLoader };
};

export default useLoader;
