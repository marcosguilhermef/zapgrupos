import { configureStore } from '@reduxjs/toolkit';
import { gruposReducer } from './slices/Grupos';

export default configureStore({
  reducer: {
    grupos: gruposReducer,
  },
});
