import {createSlice} from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
  name: 'dropdowns',
  initialState: {
    transactionType: 'both',
    category: 'none',
  },
  reducers: {
    setTransactionType: (state, action) => {
      state.transactionType = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default dropdownSlice.reducer;
export const {setTransactionType, setCategory} = dropdownSlice.actions;
