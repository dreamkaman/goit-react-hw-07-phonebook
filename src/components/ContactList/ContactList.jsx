import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import styles from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/contactsOperations';

const ContactList = () => {
  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  if (!contacts.length) {
    return null;
  }

  function getFilteredContacts(filter, contacts) {
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  }

  const filteredContacts = getFilteredContacts(filter, contacts);

  const elements = filteredContacts.map(({ name, id, phone }) => {
    return (
      <li key={id} className={styles.list}>
        {name}: {phone}{' '}
        <Button type="button" text="Delete" onClick={() => dispatch(deleteContact(id))} />
      </li>
    );
  });

  //===============================return=================================
  return <ul>{elements}</ul>;
};

export default ContactList;
