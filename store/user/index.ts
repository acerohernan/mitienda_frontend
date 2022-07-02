import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from './actions';
import { UserState } from './types';

const initialState: UserState = {
  token: '',
  store: '',
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(login, (state, { payload }: { payload: any }) => {
      state.token = payload.token;
      state.store = payload.store.slug;
    })
    .addCase(logout, (state, action) => {
      state.token = '';
      state.store = '';
    })
);
