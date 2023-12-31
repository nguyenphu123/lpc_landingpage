import { createSlice } from "@reduxjs/toolkit";
import languageChange from "@/models/language";
const initialState = {
  value: "en",
};

export const changeLanguge = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, payload) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value = payload.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = changeLanguge.actions;
export const language = (state: languageChange) => state;
export default changeLanguge.reducer;
