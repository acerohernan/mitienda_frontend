import { createAction } from '@reduxjs/toolkit';

export const login = createAction<any>('user/login');
export const logout = createAction('user/logout');
