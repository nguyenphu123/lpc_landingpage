import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    companyNews: [],
  },
};

export const searchNew = createSlice({
  name: "search",
  initialState,
  reducers: {
    companyNew: (state, payload: any) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.companyNews = payload.payload.news;
     
    },
  },
});
// Action creators are generated for each case reducer function
export const { companyNew } = searchNew.actions;
export const news = (state: any) => state;
export default searchNew.reducer;
