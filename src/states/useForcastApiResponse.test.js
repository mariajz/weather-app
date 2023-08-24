import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useForcastApiResponse from './useForcastApiResponse';
import { mockSuccessResponse } from '../api/weather-api/current-weather/mocks';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () =>
    renderHook(() => useForcastApiResponse(), { wrapper });

describe('Tests for useForcastApiResponse', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return response and setResponse', async () => {
        const { result } = customRender();

        expect(result.current.response).toStrictEqual(mockSuccessResponse);
    });

    it('should set response to atom', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setResponse({ key: 'value' });
        });

        expect(result.current.response).toStrictEqual({ key: 'value' });
    });
});
