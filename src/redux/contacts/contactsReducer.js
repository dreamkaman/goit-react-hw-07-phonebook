import { createReducer } from '@reduxjs/toolkit';
import { addContactAction, deleteContactAction } from './contactsAction';

const initialState = [];

export const contactReducer = createReducer(initialState, {
  [addContactAction]: (state, action) => [...state, action.payload],
  [deleteContactAction]: (state, action) => action.payload,
});
