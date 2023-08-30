import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const searchCompany = createSlice({
  name: "search",
  initialState,
  reducers: {
    companyData: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = payload.payload.company[0];

    
    },
  },
});
// Action creators are generated for each case reducer function
export const { companyData } = searchCompany.actions;
export const company = (state: any) => state;
export default searchCompany.reducer;
