import React from 'react';
import { nanoid } from 'nanoid';
import './Contacts.css';
const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(contact => (
      <li key={nanoid(10)} className="ContactsItem">
        <p className="Info">{contact.name}:</p>
        <p className="Info">{contact.number}</p>
        <button
          className="DeleteBtn"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
