/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContacts = data => {
    const contactNew = {
      id: nanoid(10),
      name: data.name,
      number: data.number,
    };
    const findNameIndex = this.state.contacts.findIndex(
      contact => contact.name === contactNew.name
    );

    if (findNameIndex < 0) {
      return this.setState(({ contacts }) => ({
        contacts: [contactNew, ...contacts],
      }));
    }
    return alert(`${contactNew.name} is already in contacts`);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  setContacts = () => {
    this.setState({ contacts: this.formSubmitHandler });
  };

  getSavedNames = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredName = this.getSavedNames();
    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={filteredName}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
