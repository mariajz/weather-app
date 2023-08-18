import { renderHook, act } from '@testing-library/react-hooks';
import useGetAllLocations from './useGetAllLocations';
import getLocationsApi from '../api/weather-api/get-locations/Api';

jest.mock('../api/weather-api/get-locations/Api', () => {
    return jest.fn().mockImplementation(() => ({
        call: jest.fn(),
    }));
});
const renderuseGetAllLocationsHook = () =>
    renderHook(() => useGetAllLocations());
describe('Tests for useGetAllLocations', () => {
    it('should call getLocationsApi with correct query params', async () => {
        const { result } = renderuseGetAllLocationsHook();

        await act(async () => {
            await result.current.handleFetchLocations();
        });

        expect(getLocationsApi).toHaveBeenCalledTimes(1);
        expect(getLocationsApi).toHaveBeenCalledWith({
            queryParams: {
                key: 'key',
                q: 'Palakkad',
            },
        });
    });
});
