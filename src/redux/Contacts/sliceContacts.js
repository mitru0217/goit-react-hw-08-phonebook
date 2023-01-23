import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/Auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/Contacts/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push({
          name: action.payload.name,
          number: action.payload.number,
          id: action.payload.id,
        });
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.contacts = [];
        state.error = null;
        state.isLoading = false;
      });
  },
  // {
  //   [fetchContacts.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = action.payload;
  //   },
  //   [fetchContacts.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContact.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts.push({
  //       name: action.payload.name,
  //       number: action.payload.number,
  //       id: action.payload.id,
  //     });
  //   },
  //   [addContact.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContact.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.contacts.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
