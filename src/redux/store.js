import { configureStore } from '@reduxjs/toolkit';
import beauty from './productsSlice';
import cart from './cartSlice';
import sale from './saleSlice'


export const store = configureStore({
    reducer: {
      beauty: beauty,
      cart,
      sale
      
    },
  })