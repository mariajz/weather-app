import { atom, useAtom } from 'jotai';

const currentDayAtom = atom(new Date().getDate());

const useCurrentDay = () => {
    const [currentDay, setCurrentDay] = useAtom(currentDayAtom);

    return {
        currentDay,
        setCurrentDay,
    };
};
export default useCurrentDay;
