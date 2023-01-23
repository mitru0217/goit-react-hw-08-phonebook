import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/Contacts/selectors';
import { addContact } from 'redux/Contacts/operations';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container,
  Box,
  // Typography,
  TextField,
  Button,
} from '@mui/material';
import { ContactsForm } from 'components/ContactForm/ContactForm.styled';
import { Person, Phone } from '@mui/icons-material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactNew = {
      name: name,
      number: number,
    };

    const findNameIndex = contacts.findIndex(
      contact => contact.name === contactNew.name
    );
    if (findNameIndex < 0) {
      dispatch(addContact(contactNew));
      toast.success(`${contactNew.name} added to contacts`, { duration: 2000 });
    } else {
      toast.error(`${contactNew.name} is already in contacts`, {
        duration: 2000,
      });
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />

      <ContactsForm onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '280px',
            marginBottom: '8px',
          }}
        >
          <Person sx={{ color: '#1976d2', mr: 1, my: 0.5 }} />
          <TextField
            id="name"
            label="Name"
            variant="standard"
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
            sx={{ m: 1, width: '25ch' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '280px',
            marginBottom: '8px',
          }}
        >
          <Phone sx={{ color: '#1976d2', mr: 1, my: 0.5 }} />
          <TextField
            id="number"
            label="Number"
            variant="standard"
            name="number"
            type="tel"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            onChange={handleChange}
            sx={{ m: 1, width: '25ch' }}
          />
        </Box>
        <Button type="submit" variant="contained">
          Add Contact
        </Button>
      </ContactsForm>
    </Container>
  );
}
