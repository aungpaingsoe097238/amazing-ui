import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
