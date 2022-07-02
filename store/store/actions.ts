import { createAction } from '@reduxjs/toolkit';
import { UpdateStoreInformationFormValues } from '../../api/store/types';

export const updateStoreInformation =
  createAction<UpdateStoreInformationFormValues>('store/update-information');
