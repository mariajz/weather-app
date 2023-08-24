import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useCurrentHour from './useCurrentHour';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () => renderHook(() => useCurrentHour(), { wrapper });

describe('Tests for useCurrentHour', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return currentHour and setCurrentHour', async () => {
        const { result } = customRender();

        expect(result.current.currentHour).toStrictEqual(new Date().getHours());
    });

    it('should set current Hour to atom', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setCurrentHour(11);
        });

        expect(result.current.currentHour).toStrictEqual(11);
    });
});
