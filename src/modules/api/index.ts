import axios, { AxiosResponse } from 'axios';
import { url } from './const';
import ENDPOINTS, { IEndpoints } from "./endpoints";

class Api {
    constructor(
        readonly endpoints: IEndpoints) { }

    generateRequest(endpoint: string, data: any) {
        const { uri } = this.endpoints[endpoint];

        return axios.post(`${url}${uri}`, data)
            .then(response => response)
    }

    fetch(endpoint: string, data: any = []) {

        return this.generateRequest(endpoint, data)
            .then((res: AxiosResponse) => {
                return res.data;
            });
    }
}

export default new Api(ENDPOINTS);