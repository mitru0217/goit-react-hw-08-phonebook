import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { removeContact } from 'redux/sliceContacts';
import './Contacts.css';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="ContactList">
      {visibleContacts.map(contact => (
        <li key={nanoid(10)} className="ContactsItem">
          <p className="Info">{contact.name}:</p>
          <p className="Info">{contact.number}</p>
          <button
            className="DeleteBtn"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
      {visibleContacts.length === 0 && (
        <span className="Message">Сontact list is empty </span>
      )}
    </ul>
  );
};

export default ContactsList;
