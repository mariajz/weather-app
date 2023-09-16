import { atom, useAtom } from 'jotai';

const userInputAtom = atom(undefined);

const useUserInput = () => {
    const [userInput, setUserInput] = useAtom(userInputAtom);

    return {
        userInput,
        setUserInput,
    };
};
export default useUserInput;
