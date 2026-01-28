import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import cartReducer from './reducer/cartReducer';
import ordersReducer from './reducer/orderReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['auth/setUser'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.createdAt'],
        // Ignore these paths in the state
        ignoredPaths: ['auth.user.createdAt'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;