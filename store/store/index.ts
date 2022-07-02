import { createReducer } from '@reduxjs/toolkit';
import { updateStoreInformation } from './actions';
import { StoreState } from './types';

const initialState: StoreState = {
  slug: '',
  name: '',
  address: '',
  color: '',
  country: '',
  description: '',
  id: 0,
  keywords: '',
  slogan: '',
  type: null,
  logoUrl: null,
  bannerUrl: null,
  phone: '',
  twitter: null,
  facebook: null,
  instagram: null,
  products: [],
};

const storeReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateStoreInformation, (state, { payload }) => {
    state.slug = payload.slug;
    state.name = payload.name;
    state.address = payload.address;
    state.color = payload.color;
    state.country = payload.country;
    state.description = payload.description;
    state.id = payload.id;
    state.keywords = payload.keywords;
    state.slogan = payload.slogan;
    state.type = payload.type;
    state.phone = payload.phone;
    state.twitter = payload.twitter;
    state.facebook = payload.facebook;
    state.instagram = payload.instagram;
    state.logoUrl = payload.logoUrl;
    state.bannerUrl = payload.bannerUrl;
  });
});

export default storeReducer;
