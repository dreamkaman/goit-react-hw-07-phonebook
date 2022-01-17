import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import { deleteContactAction } from '../../redux/contacts/contactsAction';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  if (!contacts.length) {
    return null;
  }

  function getFilteredContacts(filter, contacts) {
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  }

  const filteredContacts = getFilteredContacts(filter, contacts);

  console.log(filteredContacts);

  const elements = filteredContacts.map(({ name, id, number }) => {
    return (
      <li key={id} className={styles.list}>
        {name}: {number}{' '}
        <Button
          type="button"
          text="Delete"
          onClick={() => dispatch(deleteContactAction(contacts, id))}
        />
      </li>
    );
  });

  //===============================return=================================
  return <ul>{elements}</ul>;
};

export default ContactList;
