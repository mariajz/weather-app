import ApiService from '../../ApiService';
import baseUrl from '../BaseUrl';

class Api extends ApiService {
    constructor({ queryParams }) {
        super({
            method: 'GET',
            url: `${baseUrl}/v1/search.json`,
            queryParams: queryParams,
        });
    }
}

export default Api;
