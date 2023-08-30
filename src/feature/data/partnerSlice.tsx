import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    partnerList: [],
  },
};

export const searchPartner = createSlice({
  name: "search",
  initialState,
  reducers: {
    companyPartner: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.partnerList = payload.payload.partner;
      
    },
  },
});
// Action creators are generated for each case reducer function
export const { companyPartner } = searchPartner.actions;
export const partner = (state: any) => state;
export default searchPartner.reducer;
