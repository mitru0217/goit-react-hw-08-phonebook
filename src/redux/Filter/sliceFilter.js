import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/Auth/operations';

const filterinitialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterinitialState,
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      state.initialState = '';
    });
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
