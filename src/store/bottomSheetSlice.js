import {createSlice} from '@reduxjs/toolkit';

const bottomSheetSlice = createSlice({
  name: 'theme',
  initialState: {
    currentState:'close',
    transactionType:'expense'
  },
  reducers: {
    openBottomSheet: (state) => {
        state.currentState = 'open'
    },
    closeBottomSheet: (state) => {
        state.currentState = 'close'
    },
    setTransactionType: (state,action) => {
        state.transactionType = action.payload;
    }
  },
});

export default bottomSheetSlice.reducer;
export const {openBottomSheet,closeBottomSheet,setTransactionType} = bottomSheetSlice.actions;
