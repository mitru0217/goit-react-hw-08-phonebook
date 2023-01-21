import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
import { getContacts, getIsLoading, getError } from 'redux/Contacts/selectors';
import { getFilter } from 'redux/Filter/filter-selector';
import {
  TitleList,
  ContactList,
} from 'components/ContactsList/ContactsList.styled';
import { Contact } from 'components/Contact/Contact';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);
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
  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {<TitleList>Contacts</TitleList>}
      {
        <ContactList>
          {visibleContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
          {visibleContacts.length === 0 && (
            <span className="Message">Сontact list is empty </span>
          )}
        </ContactList>
      }

      {error && <p>Not found</p>}
    </>
  );
};

export default ContactsList;
