import axios from 'axios';

const BASE_URL = 'https://61e5892ac14c7a0017124d04.mockapi.io/contacts/contacts/';

const getContacts = () => axios(BASE_URL);

const addContact = (name, phone) => axios.post(BASE_URL, { name, phone });

const deleteContact = id => axios.delete(`${BASE_URL}${id}`);

export const mockapi = {
  getContacts,
  addContact,
  deleteContact,
};
