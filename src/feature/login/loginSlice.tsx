import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {}, // for user object
  },
  reducers: {
    userLogin: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userInfo = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin } = userSlice.actions;
export const user = (state: any) => state;
export default userSlice.reducer;
