import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import dropdownSlice from './dropdownSlice'
import TransactionsSlice from './TransactionsSlice'
import bottomSheetSlice from './bottomSheetSlice'
import userSlice from './userSlice'
import modalSlice from './modalSlice'

const store = configureStore({
  reducer: {
    theme:themeSlice,
    dropdown:dropdownSlice,
    transactions:TransactionsSlice,
    bottomSheet:bottomSheetSlice,
    user:userSlice,
    modal:modalSlice
  },
})

export default store