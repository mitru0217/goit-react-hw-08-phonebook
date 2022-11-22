import React from 'react';
import { nanoid } from 'nanoid';
import './Contacts.css';
const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={nanoid(10)} className="ContactsItem">
        <p className="Info">{name}:</p>
        <p className="Info">{number}</p>
        <button className="DeleteBtn" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
