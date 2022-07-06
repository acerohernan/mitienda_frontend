import { BASE_URL, fetchData } from '..';
import { createProduct, getAllProducts } from './products';
import { UpdateStoreInformationFormValues } from './types';

const headers = () => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root') || '').user
  ).token;

  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token,
  };
};

export const getInformation = () =>
  fetchData.get(`${BASE_URL}/store/get-information`, { headers: headers() });

export const getReport = () =>
  fetchData.get(`${BASE_URL}/user/get-report`, { headers: headers() });

export const getSteps = () =>
  fetchData.get(`${BASE_URL}/user/get-steps`, { headers: headers() });

export const getProducts = () =>
  fetchData.get(`${BASE_URL}/user/get-products`, { headers: headers() });

export const getCheckoutOptions = () =>
  fetchData.get(`${BASE_URL}/user/get-checkout-options`, {
    headers: headers(),
  });

export const uploadSingleImage = (img: File | null) => {
  if (!img) return;
  const formData = new FormData();
  formData.append('image', img);
  return fetchData.post(`${BASE_URL}/store/upload-image`, formData, {
    headers: headers(),
  });
};

export const updateStoreInformation = (
  data: UpdateStoreInformationFormValues
) =>
  fetchData.put(`${BASE_URL}/store/update-information`, data, {
    headers: headers(),
  });

export const products = {
  create: createProduct,
  getALl: getAllProducts,
};
