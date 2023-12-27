import React from 'react';
import { StyledWrapper } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <StyledWrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </StyledWrapper>
    </>
  );
};
export default ContactsPage;
