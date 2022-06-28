import axios from 'axios';
export const BASE_URL = 'http://localhost:5000/api/v1';

//Endpoints
import user from './user';

export function fetchData() {
  const defaultOptions = {
    baseUrl: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  //let token = localStorage.get('token');
  let instance = axios.create(defaultOptions);

  /* if (Boolean(token)) {
    instance.interceptors.request.use(function (config: any) {
      config.headers.Authorization = `Bearer ${token}`;
    });
  } */

  return instance;
}

const API = {
  user,
};

export default API;
