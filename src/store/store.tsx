import { configureStore } from '@reduxjs/toolkit'
import changeLanguage from '@/feature/changeLanguage/changeLanguageSlice'
import searchNews from '@/feature/search/searchSlice'
import data from '@/feature/data/dataSlice'
export const store = configureStore({
  reducer: {
    changeLanguage : changeLanguage,
    searchNews : searchNews,
    data:data
  },
})