import { renderHook, act } from '@testing-library/react-hooks';
import useLoader from './useLoader';

const mockSetLoading = jest.fn();
jest.mock('../states/useLoading', () => () => ({
    setLoading: mockSetLoading,
}));

const renderUseLoaderHook = () => renderHook(() => useLoader());

describe('Tests for useLoader', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should set loading to true when showLoader is called', async () => {
        const { result } = renderUseLoaderHook();

        await act(async () => {
            await result.current.showLoader();
        });

        expect(mockSetLoading).toHaveBeenCalledTimes(1);
        expect(mockSetLoading).toHaveBeenCalledWith(true);
    });

    it('should set loading to false when hideLoader is called', async () => {
        const { result } = renderUseLoaderHook();

        await act(async () => {
            await result.current.hideLoader();
        });

        expect(mockSetLoading).toHaveBeenCalledTimes(1);
        expect(mockSetLoading).toHaveBeenCalledWith(false);
    });
});
