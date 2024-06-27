"use client"

import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Features/categorySlice';
import productsReducer from './Features/productsSlice';
import cartReducer from './Features/cartSlice';
import ordersReducer from './Features/ordersSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const store = makeStore();

export const wrapper = createWrapper(() => store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
