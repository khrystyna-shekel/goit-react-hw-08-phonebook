import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { StyledSection } from 'components/ContactForm/ContactForm.styled';
import styled from 'styled-components';

const ContactsPage = () => {
  return (
    <>
      <StyledSection>
        <StyledWrapper>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </StyledWrapper>
      </StyledSection>
    </>
  );
};
export default ContactsPage;

const StyledWrapper = styled.div`
  border: 2px solid rgb(139, 139, 187);
  border-radius: 10px;
  padding: 20px 25px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);
  width: 350px;
  height: auto;
  background-color: lavender;

  & h1 {
    margin-bottom: 10px;
    font-size: 36px;
    color: rgb(139, 139, 187);
  }

  & h2 {
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 32px;
    color: rgb(139, 139, 187);
  }
`;
