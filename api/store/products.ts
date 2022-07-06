import API, { BASE_URL, fetchData } from '..';
import { CreateProductFormValues } from './types';

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

export const createProduct = async (form: CreateProductFormValues) => {
  form.imgUrl = null;
  if (form.img) {
    const imgResponse = await API.store.uploadSingleImage(form.img);
    const data = imgResponse?.data;

    if (data.success) {
      form.imgUrl = data.data;
    }
  }

  return fetchData.post(`${BASE_URL}/store/create-product`, form, {
    headers: headers(),
  });
};

export const getAllProducts = () =>
  fetchData.get(`${BASE_URL}/store/get-all-products`, {
    headers: headers(),
  });
