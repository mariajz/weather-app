import { renderHook, act } from '@testing-library/react-hooks';
import useGetLocations from './useGetLocations';
import getLocationsApi from '../api/weatherstack-api/get-locations/Api';

jest.mock('../api/weatherstack-api/get-locations/Api', () => {
    return jest.fn().mockImplementation(() => ({
        call: jest.fn(),
    }));
});
const renderUseGetLocationsHook = () => renderHook(() => useGetLocations());
describe('Tests for useGetLocations', () => {
    it('should call getLocationsApi with correct query params', async () => {
        const { result } = renderUseGetLocationsHook();

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
