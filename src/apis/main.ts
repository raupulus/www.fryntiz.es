// Peticiones a la api principal configurada en el .env

import axios from 'axios';
import type { SiteInfo } from '@/interfaces/siteInterfaces';

const baseUrl = 'http://127.0.0.1:8000/api/v1';
const accessToken = 'gffdg7sd8fg7sdfg7sdf';
const language = 'es';
const headers = { 
    "Authorization": "Bearer my-token",
    "My-Custom-Header": "foobar"
  };

const instance = axios.create({
    baseURL: baseUrl,
    params: {
        language: language,
        access_token: accessToken
    },
    headers: headers
});

export const siteInfo = async (): Promise<SiteInfo> => {
    const url = 'platform/info';

    return await instance.post(url).then((response) => response.data);



    /*
    axios.post("https://reqres.in/api/articles", article, { headers })
    .then(response => this.articleId = response.data.id);
    */
}