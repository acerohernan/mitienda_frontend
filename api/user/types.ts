export interface SignUpFormValues {
  email: string;
  re_email: string;
  password: string;
  store: string;
  country: string;
  phone: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface ForgotStoreFormValues {
  email: string;
}

export interface ForgotPasswordFormValues {
  email: string;
}

export interface VerfiyCodeFormValues {
  code: string | string[] | undefined;
}

export interface ChangePasswordFormValues {
  email: string;
  password: string;
  re_password: string;
}
