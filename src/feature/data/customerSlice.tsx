import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    customerList: [],
  },
};

export const searchCustomer = createSlice({
  name: "search",
  initialState,
  reducers: {
    customerData: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.customerList = payload.payload.customer;
     
    },
  },
});
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  // const response = await client.get('/fakeApi/posts')
  // return response.data
});
// Action creators are generated for each case reducer function
export const { customerData } = searchCustomer.actions;
export const customer = (state: any) => state;
export default searchCustomer.reducer;
