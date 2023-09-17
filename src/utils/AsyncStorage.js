import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchData = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error retrieving value: ', error);
    }
};

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error storing value: ', error);
    }
};

const updateData = async (key, value) => {
    try {
        await AsyncStorage.removeItem(key, () => {
            storeData(key, value);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error updating value: ', error);
    }
};

const clearData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error clearing values: ', error);
    }
};
export { fetchData, storeData, updateData, clearData };
