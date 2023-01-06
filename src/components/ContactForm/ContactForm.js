import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from 'redux/sliceContacts';
import './ContactForm.css';
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid(10);
  const numberInputId = nanoid(10);

  const contacts = useSelector(getContacts);

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

  const dispatch = useDispatch();

  const addContacts = e => {
    e.preventDefault();
    const contactNew = {
      id: nanoid(10),
      name: name,
      number: number,
    };
    const findNameIndex = contacts.findIndex(
      contact => contact.name === contactNew.name
    );
    if (findNameIndex < 0) {
      dispatch(addContact(contactNew));
    } else {
      alert(`${contactNew.name} is already in contacts`);
    }

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={addContacts} className="ContactsForm">
      <label htmlFor={nameInputId}>
        Name
        <input
          className="ContactsInput"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
        />
      </label>

      <label htmlFor={numberInputId}>
        Number
        <input
          className="ContactsInput"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={numberInputId}
        />
      </label>

      <button type="submit" className="ContactsBtn">
        Add contact
      </button>
    </form>
  );
}
