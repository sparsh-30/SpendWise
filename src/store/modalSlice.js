import {createSlice} from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: 'close',
  },
  reducers: {
    changeModalStatus: (state,action) => {
      state.showModal=action.payload;
    },
  },
});

export default modalSlice.reducer;
export const {changeModalStatus} = modalSlice.actions;
