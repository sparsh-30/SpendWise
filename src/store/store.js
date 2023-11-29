import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import dropdownSlice from './dropdownSlice'
import TransactionsSlice from './TransactionsSlice'
import bottomSheetSlice from './bottomSheetSlice'

const store = configureStore({
  reducer: {
    theme:themeSlice,
    dropdown:dropdownSlice,
    transactions:TransactionsSlice,
    bottomSheet:bottomSheetSlice
  },
})

export default store