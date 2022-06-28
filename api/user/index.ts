import { BASE_URL, fetchData } from '../index';
import {
  ChangePasswordFormValues,
  ForgotPasswordFormValues,
  ForgotStoreFormValues,
  LoginFormValues,
  SignUpFormValues,
  VerfiyCodeFormValues,
} from './types';

const signUp = (data: SignUpFormValues) =>
  fetchData().post(`${BASE_URL}/user/auth/signup`, data);

const login = (data: LoginFormValues) =>
  fetchData().post(`${BASE_URL}/user/auth/login`, data);

const forgotStore = (data: ForgotStoreFormValues) =>
  fetchData().post(`${BASE_URL}/user/auth/forgot-store`, data);

const forgotPassword = (data: ForgotPasswordFormValues) =>
  fetchData().post(`${BASE_URL}/user/auth/forgot-password`, data);

const verifyCode = (data: VerfiyCodeFormValues) =>
  fetchData().post(`${BASE_URL}/user/auth/verify-code`, data);

const changePassword = (data: ChangePasswordFormValues) =>
  fetchData().post(`${BASE_URL}/user/auth/change-password`, data);

export default {
  signUp,
  login,
  forgotStore,
  forgotPassword,
  verifyCode,
  changePassword,
};
