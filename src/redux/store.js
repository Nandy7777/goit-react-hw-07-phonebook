import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    filter: filtersReducer,
  },
});

