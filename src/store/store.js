import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import dropdownSlice from './dropdownSlice'

const store = configureStore({
  reducer: {
    theme:themeSlice,
    dropdown:dropdownSlice
  },
})

export default store