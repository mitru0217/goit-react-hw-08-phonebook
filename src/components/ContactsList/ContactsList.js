import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  getFilter,
  getContacts,
  getIsLoading,
  getError,
} from 'redux/selectors';
import {
  TitleList,
  ContactList,
} from 'components/ContactsList/ContactsList.styled';
import { Contact } from 'components/Contact/Contact';

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
  // const handleDelete = () => dispatch(deleteContact(contacts.id));

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <TitleList>Contacts</TitleList>
      <ContactList>
        {visibleContacts.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} phone={phone} />
        ))}
        {visibleContacts.length === 0 && (
          <span className="Message">Сontact list is empty </span>
        )}
      </ContactList>
      {error && <p>Not found</p>}
    </>
  );
};

export default ContactsList;
