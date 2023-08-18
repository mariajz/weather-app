import { clearData, fetchData, storeData, updateData } from './AsyncStorage';

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
const mockClear = jest.fn();
jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: (...params) => mockGetItem(...params),
    setItem: (...params) => mockSetItem(...params),
    removeItem: (...params) => mockRemoveItem(...params),
    clear: (...params) => mockClear(...params),
}));

describe('AsyncStorage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should store data into AsyncStorage', async () => {
        mockSetItem.mockResolvedValueOnce();

        await storeData('location', 'kochi');

        expect(mockSetItem).toHaveBeenCalledTimes(1);
        expect(mockSetItem).toHaveBeenCalledWith('location', 'kochi');
    });

    it('should fetch data from AsyncStorage', async () => {
        mockGetItem.mockResolvedValueOnce('kochi');

        const value = await fetchData('location');

        expect(mockGetItem).toHaveBeenCalledTimes(1);
        expect(mockGetItem).toHaveBeenCalledWith('location');
        expect(value).toStrictEqual('kochi');
    });

    it('should update data in AsyncStorage', async () => {
        mockGetItem.mockResolvedValueOnce('kochi');
        await storeData('location', 'kochi');
        const value = await fetchData('location');
        expect(value).toStrictEqual('kochi');
        expect(mockSetItem).toHaveBeenCalledTimes(1);
        expect(mockSetItem.mock.calls[0]).toStrictEqual(['location', 'kochi']);

        mockRemoveItem.mockResolvedValueOnce(
            'location',
            mockSetItem('location', 'tvm'),
        );
        await updateData('location', 'tvm');
        expect(mockRemoveItem).toHaveBeenCalledTimes(1);
        expect(mockRemoveItem).toHaveBeenCalledWith(
            'location',
            expect.any(Function),
        );
        expect(mockSetItem).toHaveBeenCalledTimes(2);
        expect(mockSetItem.mock.calls[1]).toStrictEqual(['location', 'tvm']);
    });

    it('should clear AsyncStorage', async () => {
        mockClear.mockResolvedValueOnce();

        await clearData();

        expect(mockClear).toHaveBeenCalledTimes(1);
    });
});
