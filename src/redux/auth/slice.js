import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    password: '',
  },
  token: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authReducer = slice.reducer;
