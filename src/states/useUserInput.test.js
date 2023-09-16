import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useUserInput from './useUserInput';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () => renderHook(() => useUserInput(), { wrapper });

describe('Tests for useUserInput', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return userInput and setUserInput', async () => {
        const { result } = customRender();

        expect(result.current.userInput).toStrictEqual(undefined);
    });

    it('should set current Hour to atom', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setUserInput('koc');
        });

        expect(result.current.userInput).toStrictEqual('koc');
    });
});
