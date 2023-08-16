import { configureStore } from '@reduxjs/toolkit'
import changeLanguage from '@/feature/changeLanguage/changeLanguageSlice'
import searchNews from '@/feature/search/searchSlice'
import companyData from '@/feature/data/companySlice'
import customerData from '@/feature/data/customerSlice'
import newData from '@/feature/data/newSlice'
import partnerData from '@/feature/data/partnerSlice'
import productData from '@/feature/data/productSlice'
import userSlice from "@/feature/login/loginSlice"
export const store = configureStore({
  reducer: {
    changeLanguage : changeLanguage,
    searchNews : searchNews,
    companyData:companyData,
    user:userSlice,
    customerData : customerData,
    newData : newData,
    partnerData:partnerData,
    productData:productData
  },
})