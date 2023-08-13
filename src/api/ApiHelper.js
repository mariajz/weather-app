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
        console.log('error: ', error);
        return {};
    }
};

export { makeApiCall };
