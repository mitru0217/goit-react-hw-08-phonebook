import React from 'react';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { Container, Title } from './App.styled';

function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Container>
  );
}

export default App;
