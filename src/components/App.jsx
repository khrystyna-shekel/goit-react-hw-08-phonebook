import ContactsPage from 'pages/ContactsPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { NotFound } from 'pages/NotFound';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import { PrivateRoute } from 'routesConfig/PrivateRoute';
import { PublicRoute } from 'routesConfig/PublicRoute';
import { selectIsRefresh } from '../redux/auth/selectors';
import { Loader } from '../components/Loader';
import HomePage from 'pages/HomePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
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
