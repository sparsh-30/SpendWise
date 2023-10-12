import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    switchToDark: state => {
      state.theme = 'dark';
    },
    switchToLight: state => {
      state.theme = 'light';
    },
  },
});

export default themeSlice.reducer;
export const {switchToDark, switchToLight} = themeSlice.actions;
