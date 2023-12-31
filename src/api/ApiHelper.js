import axios from 'axios';

const makeApiCall = async ({ url, method }) => {
    const options = {
        method: method,
        url: url,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error: ', error);
        throw error;
    }
};

export { makeApiCall };
