import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useCurrentLocation from './useCurrentLocation';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () => renderHook(() => useCurrentLocation(), { wrapper });

describe('Tests for useCurrentLocation', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return currentLocation and setCurrentLocation', async () => {
        const { result } = customRender();

        expect(result.current.currentLocation).toStrictEqual(undefined);
    });

    it('should set current Hour to atom', async () => {
        const { result } = customRender();

        await act(async () => {
            await result.current.setCurrentLocation('37.4226711,-122.0849872');
        });

        expect(result.current.currentLocation).toStrictEqual(
            '37.4226711,-122.0849872',
        );
    });
});
