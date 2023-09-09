import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useSearchLocation from './useSearchLocation';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () => renderHook(() => useSearchLocation(), { wrapper });

describe('Tests for useSearchLocation', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return searchLocation and setSearchLocation', async () => {
        const { result } = customRender();

        expect(result.current.searchLocation).toStrictEqual(undefined);
    });

    it('should set current Hour to atom', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setSearchLocation('37.4226711,-122.0849872');
        });

        expect(result.current.searchLocation).toStrictEqual(
            '37.4226711,-122.0849872',
        );
    });
});
