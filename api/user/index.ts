import { BASE_URL, fetchData } from '../index';
import {
  ChangePasswordFormValues,
  ForgotPasswordFormValues,
  ForgotStoreFormValues,
  LoginFormValues,
  SignUpFormValues,
  VerfiyCodeFormValues,
} from './types';

const headers = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export const signUp = (data: SignUpFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/signup`, data, { headers: headers() });

export const login = (data: LoginFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/login`, data, { headers: headers() });

export const forgotStore = (data: ForgotStoreFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/forgot-store`, data, {
    headers: headers(),
  });

export const forgotPassword = (data: ForgotPasswordFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/forgot-password`, data, {
    headers: headers(),
  });

export const verifyCode = (data: VerfiyCodeFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/verify-code`, data, {
    headers: headers(),
  });

export const changePassword = (data: ChangePasswordFormValues) =>
  fetchData.post(`${BASE_URL}/user/auth/change-password`, data, {
    headers: headers(),
  });
