import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/reducer/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export type User = {
  id: string;
  name: string;
  email: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
