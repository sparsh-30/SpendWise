import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const saveTransactionData = createAsyncThunk(
//   'saveTransactionData/saveData',
//   async (transactionsData) => {
//     const transactionsDataJSON=JSON.stringify(transactionsData);
//     await AsyncStorage.setItem('transactions-data', transactionsDataJSON);
//     return transactionsData;
//   },
// );
const saveUserName = createAsyncThunk('saveUser', async name => {
  await AsyncStorage.setItem('user-name', name);
  return name;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveUserName.fulfilled, (state, action) => {
      state.userName = action.payload;
    });
  },
});

export default userSlice.reducer;
export const {setUserName} = userSlice.actions;
export {saveUserName};
