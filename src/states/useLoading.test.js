import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useLoading from './useLoading';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () => renderHook(() => useLoading(), { wrapper });

describe('Tests for useLoading', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return loading', async () => {
        const { result } = customRender();

        expect(result.current.loading).toBeFalsy();
    });

    it('should set loading as true', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setLoading(true);
        });

        expect(result.current.loading).toBeTruthy();
    });
});
