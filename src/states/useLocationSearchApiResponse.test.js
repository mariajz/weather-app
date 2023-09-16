import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useLocationSearchApiResponse from './useLocationSearchApiResponse';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () =>
    renderHook(() => useLocationSearchApiResponse(), { wrapper });

describe('Tests for useLocationSearchApiResponse', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return response and setResponse', async () => {
        const { result } = customRender();

        expect(result.current.response).toStrictEqual([]);
    });

    it('should set response to atom', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setResponse({ key: 'value' });
        });

        expect(result.current.response).toStrictEqual({ key: 'value' });
    });
});
