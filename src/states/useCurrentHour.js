import { atom, useAtom } from 'jotai';

const currentHourAtom = atom(new Date().getHours());

const useCurrentHour = () => {
    const [currentHour, setCurrentHour] = useAtom(currentHourAtom);

    return {
        currentHour,
        setCurrentHour,
    };
};
export default useCurrentHour;
