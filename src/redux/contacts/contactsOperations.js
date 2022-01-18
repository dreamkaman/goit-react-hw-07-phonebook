import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockapi } from '../../services/api';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await mockapi.getContacts();

  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async contact => {
  const response = await mockapi.addContact(contact);

  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  const response = await mockapi.deleteContact(id);

  return response.data;
});
