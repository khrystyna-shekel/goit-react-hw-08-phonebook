import ContactsPage from 'pages/ContactsPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <div
    // style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   padding: '10px 50px',
    //   flexDirection: 'column',
    //   fontSize: 28,
    //   color: '#010101',
    // }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<p>homepage</p>} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
