import axios, { AxiosStatic } from 'axios';
import { AppConfiguration } from '../config/config';

type LoginRecord = {
    name: string,
    password: string
}

class HttpService {

    constructor(private axios: AxiosStatic) {

    }

    async login(loginInput: LoginRecord): Promise<any> {
        return await axios.post(
            AppConfiguration.host + AppConfiguration.loginUrl, loginInput);
    }
}
