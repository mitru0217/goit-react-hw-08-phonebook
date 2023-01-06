import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = [
  { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
  { id: nanoid(10), name: 'Gretta Turnberg', number: '3377-98-27' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts,
  },

  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: nanoid(10),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
