import { makeApiCall } from './ApiHelper';

class ApiService {
    constructor({ method, url, queryParams }) {
        this.method = method;
        this.url = url;
        this.queryParams = queryParams;
    }

    call() {
        const urlParams = new URLSearchParams(this.queryParams);
        const queryString = urlParams.toString();
        const fullUrl = `https://${this.url}?${queryString}`;
        return makeApiCall({
            url: fullUrl,
            method: this.method,
        });
    }
}

export default ApiService;
