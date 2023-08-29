import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'jotai';
import React from 'react';
import useUserPermissions from './useUserPermissions';

const wrapper = ({ children }) => <Provider>{children}</Provider>;

const customRender = () => renderHook(() => useUserPermissions(), { wrapper });

describe('Tests for useUserPermissions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Tests for location permission', () => {
        it('should return locationPermission as false', async () => {
            const { result } = customRender();

            expect(result.current.locationPermission).toStrictEqual(
                'unavailable',
            );
        });

        it('should set locationPermission as granted', async () => {
            const { result } = customRender();

            await act(async () => {
                await result.current.setLocationPermission('granted');
            });

            expect(result.current.locationPermission).toStrictEqual('granted');
        });

        it('should set locationPermission as denied', async () => {
            const { result } = customRender();

            await act(async () => {
                await result.current.setLocationPermission('denied');
            });

            expect(result.current.locationPermission).toStrictEqual('denied');
        });
    });
});
