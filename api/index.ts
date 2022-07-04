import axios from 'axios';
export const BASE_URL = 'http://localhost:5000/api/v1';
export const BASE_URL_PROD = 'https://mitienda-backend.herokuapp.com/api/v1';

//Endpoints
import * as store from './store';
import * as user from './user';

export const fetchData = axios;

fetchData.interceptors.response.use(
  undefined,
  function axiosRetryInterceptor(err) {
    switch (err.response.status) {
      case 401:
        if (!!localStorage.getItem('token')) {
          localStorage.removeItem('token');
        }
        break;
      default:
        break;
    }

    return Promise.reject(err);
  }
);

const API = {
  user,
  store,
};

export default API;
