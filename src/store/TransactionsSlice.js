import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveTransactionData = createAsyncThunk(
  'saveTransactionData/saveData',
  async (transactionsData, thunkAPI) => {
    const temp=JSON.stringify(transactionsData);
    await AsyncStorage.setItem('transactions-data', temp);
    return transactionsData;
  },
);

const TransactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    totalExpense: Number(0),
    totalIncome: Number(0),
  },
  reducers: {
    setTransactionsArray: (state, action) => {
      state.transactions.push(action.payload);
      if (action.payload.expense === true)
        state.totalExpense += Number(action.payload.amount);
      else state.totalIncome += Number(action.payload.amount);
    },
    initialiseData: (state, action) => {
      state.transactions = action.payload.transactions;
      state.totalIncome = action.payload.totalIncome;
      state.totalExpense = action.payload.totalExpense;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveTransactionData.fulfilled, (state, action) => {
      state.transactions=action.payload.transactions;
      state.totalExpense=action.payload.totalExpense;
      state.totalIncome=action.payload.totalIncome;
    })
  },
});

export default TransactionsSlice.reducer;
export const {setTransactionsArray, initialiseData} = TransactionsSlice.actions;
export {saveTransactionData};