import { atom, useAtom } from 'jotai';

const loadingAtom = atom(false);

const useLoading = () => {
    const [loading, setLoading] = useAtom(loadingAtom);

    return {
        loading,
        setLoading,
    };
};
export default useLoading;
