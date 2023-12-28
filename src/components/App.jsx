import ContactsPage from 'pages/ContactsPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { NotFound } from 'pages/NotFound';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import { PrivateRoute } from 'routesConfig/PrivateRoute';
import { PublicRoute } from 'routesConfig/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<p>homepage</p>} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
