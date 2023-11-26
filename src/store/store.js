import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import dropdownSlice from './dropdownSlice'
import TransactionsSlice from './TransactionsSlice'

const store = configureStore({
  reducer: {
    theme:themeSlice,
    dropdown:dropdownSlice,
    transactions:TransactionsSlice
  },
})

export default store