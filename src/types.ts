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

export interface Pricing {
  basePrice: number;
  discountPercent?: number;
  deliveryFee: number;
  taxPercent: number;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
