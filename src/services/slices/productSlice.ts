import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types';

export interface ProductState {
  products: Array<IProduct>;
  balance: number;
}

const initialState: ProductState = {
  products: [],
  balance: 20,
};

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initializeProduct(state, action: PayloadAction<ProductState>) {
      state.products = action.payload.products;
      state.balance = action.payload.balance;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initializeProduct } = productSlice.actions;

export default productSlice.reducer;
