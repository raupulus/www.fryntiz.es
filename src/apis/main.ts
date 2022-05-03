// Peticiones a la api principal configurada en el .env

import axios from 'axios';
import type { SiteInfo } from '@/interfaces/siteInterfaces';

//TOFIX: DInamizar desde environment cuando termine las pruebas
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

/**
 * Pide a la api los datos del sitio.
 * 
 * @returns
 */
export const siteInfo = async (): Promise<SiteInfo> => {
    const path = 'platform/fryntiz/info';

    return await instance.post(path).then((response) => response.data);
}

