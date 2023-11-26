import {createSlice} from '@reduxjs/toolkit';

const TransactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    totalExpense: 0,
    totalIncome: 0
  },
  reducers: {
    setTransactionsArray: (state, action) => {
        state.transactions.push(action.payload);
        if(action.payload.expense===true) state.totalExpense+=action.payload.amount;
        else state.totalIncome+=action.payload.amount;
    },
  },
});

export default TransactionsSlice.reducer;
export const {setTransactionsArray} = TransactionsSlice.actions;