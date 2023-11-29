import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const toggleMode = createAsyncThunk('toggleMode', async modeToSwitchTo => {
  await AsyncStorage.setItem('theme', modeToSwitchTo);
  return modeToSwitchTo;
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(toggleMode.fulfilled, (state, action) => {
      state.theme = action.payload;
    });
  },
});

export default themeSlice.reducer;
export const {} = themeSlice.actions;
export {toggleMode};
