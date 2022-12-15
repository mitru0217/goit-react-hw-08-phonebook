import React, { useState } from 'react';

import { nanoid } from 'nanoid';
import { useLocalStorage } from '../Hooks/hooks';
import './App.css';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';

const initialContacts = [
  { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setfilter] = useState('');

  const addContacts = data => {
    const contactNew = {
      id: nanoid(10),
      name: data.name,
      number: data.number,
    };

    const findNameIndex = contacts.findIndex(
      contact => contact.name === contactNew.name
    );

    if (findNameIndex < 0) {
      return setContacts(contacts => [contactNew, ...contacts]);
    }
    return alert(`${contactNew.name} is already in contacts`);
  };

  const changeFilter = e => {
    setfilter(e.target.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
      {contacts.length === 0 && (
        <span className="Message">Сontact list is empty </span>
      )}
    </div>
  );
}

export default App;
