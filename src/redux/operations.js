import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63bc7f8afa38d30d85c9a93c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, thunkAPI) => {
    try {
      // HTTP-запрос
      const contact = await axios.get('/contacts');
      // При успешном запросе возвращаем промис с данными
      console.log(contact.data);
      return contact.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// Операция добавления контакта
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const contact = await axios.post('/contacts', { name, number });
      console.log(contact);
      console.log(contact.data);
      return contact.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
//Операция удаления контакта
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const contact = await axios.delete(`/contacts/${id}`);
      return contact.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
