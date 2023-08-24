import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useCurrentDay from './useCurrentDay';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () => renderHook(() => useCurrentDay(), { wrapper });

describe('Tests for useCurrentDay', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return currentDay and setCurrentDay', async () => {
        const { result } = customRender();

        expect(result.current.currentDay).toStrictEqual(new Date().getDate());
    });

    it('should set current Day to atom', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setCurrentDay(11);
        });

        expect(result.current.currentDay).toStrictEqual(11);
    });
});
