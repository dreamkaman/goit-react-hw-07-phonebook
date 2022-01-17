import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContactAction = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
});

export const deleteContactAction = createAction('contact/delete', (contacts, id) => {
  return { payload: contacts.filter(contact => contact.id !== id) };
});

// console.log(addContactAction('Vova', '555555'));
