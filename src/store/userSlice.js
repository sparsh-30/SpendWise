import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveUserName = createAsyncThunk('saveUserName', async name => {
  await AsyncStorage.setItem('user-name', name);
  return name;
});

const saverUserImage = createAsyncThunk('saveUserImage', async imageUri => {
  await AsyncStorage.setItem('user-image', imageUri);
  return imageUri;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userImage: '',
    userName: 'John Doe',
  },
  reducers: {
    setUserImage: (state, action) => {
      state.userImage = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveUserName.fulfilled, (state, action) => {
      state.userName = action.payload;
    });
    builder.addCase(saverUserImage.fulfilled, (state, action) => {
      state.userImage = action.payload;
    });
  },
});

export default userSlice.reducer;
export const {setUserImage, setUserName} = userSlice.actions;
export {saveUserName, saverUserImage};
