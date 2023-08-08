import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const searchNews = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { search } = searchNews.actions
export const searchResult = (state: any) => state
export default searchNews.reducer