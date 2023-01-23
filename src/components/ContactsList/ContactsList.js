import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
import { getContacts, getIsLoading, getError } from 'redux/Contacts/selectors';
import { getFilter } from 'redux/Filter/filter-selector';
import { Typography } from '@mui/material';
import { ContactList } from 'components/ContactsList/ContactsList.styled';
import { Contact } from 'components/Contact/Contact';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { contacts } = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <Typography
        variant="h5"
        sx={{ color: 'primary.main', paddingTop: '24px' }}
        marginBottom={2}
      >
        Contacts
      </Typography>
      {
        <ContactList>
          {visibleContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
          {visibleContacts.length === 0 && <span>Сontact list is empty </span>}
        </ContactList>
      }

      {error && <p>Not found</p>}
    </>
  );
};

export default ContactsList;
