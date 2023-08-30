import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    product: [],
  },
};

export const searchProduct = createSlice({
  name: "search",
  initialState,
  reducers: {
    companyProduct: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value.product = payload.payload.products;
    },
  },
});
// Action creators are generated for each case reducer function
export const { companyProduct } = searchProduct.actions;
export const product = (state: any) => state;
export default searchProduct.reducer;
