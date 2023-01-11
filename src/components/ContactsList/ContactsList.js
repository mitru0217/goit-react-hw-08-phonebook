import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  getFilter,
  getContacts,
  getIsLoading,
  getError,
} from 'redux/selectors';
import './Contacts.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log(contacts);

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  console.log(visibleContacts);
  const handleDelete = () => dispatch(deleteContact(contacts.id));

  return (
    <>
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      {isLoading && (
        <ul className="ContactList">
          {visibleContacts.map(({ id, name, number }) => (
            <li key={id} className="ContactsItem">
              <p className="Info">{name}:</p>
              <p className="Info">{number}</p>
              <button
                className="DeleteBtn"
                onClick={() => dispatch(handleDelete(id))}
              >
                Delete
              </button>
            </li>
          ))}
          {visibleContacts.length === 0 && (
            <span className="Message">Сontact list is empty </span>
          )}
        </ul>
      )}

      {error && <p>Not found</p>}
    </>
  );
};

export default ContactsList;
