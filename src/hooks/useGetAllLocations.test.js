import { act, renderHook } from '@testing-library/react-hooks';
import useGetAllLocations from './useGetAllLocations';

const mockSearchLocationApi = jest.fn();
jest.mock('../service/SearchLocationApi.service', () => () => ({
    SearchLocationApi: mockSearchLocationApi,
}));

const renderUseGetAllLocationsHook = () =>
    renderHook(() => useGetAllLocations());

describe('Tests for useGetAllLocations', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call SearchLocationApi', async () => {
        const { result } = renderUseGetAllLocationsHook();

        await act(async () => {
            await result.current.handleFetchLocationData();
        });

        expect(mockSearchLocationApi).toHaveBeenCalledTimes(1);
        expect(mockSearchLocationApi).toHaveBeenCalledWith({
            isMocked: true,
        });
    });
});
