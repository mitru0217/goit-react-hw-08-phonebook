import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/Auth/operations';

const filterinitialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterinitialState,
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      state.value = '';
    });
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
