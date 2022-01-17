import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContactAction } from '../../redux/contacts/contactsAction.js';

import InputElement from './InputElement';
import Button from '../Button';

import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);

  const [contact, setContact] = useState({ name: '', number: '' });

  const { name, number } = contact;

  const handleChange = event => {
    const key = event.target.name;
    setContact(prevstate => ({ ...prevstate, [key]: event.target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isContactExist(name)) {
      alert(`${name} is already in contacts!`);

      return;
    }

    dispatch(addContactAction(name, number));
    setContact({ name: '', number: '' });
  };

  function isContactExist(name) {
    return !!contacts.find(contact => contact.name.toUpperCase().includes(name.toUpperCase()));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputElement
        value={name}
        text="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
      />
      <InputElement
        value={number}
        text="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
      />
      <Button type="submit" text="Add contacts" />
    </form>
  );
}

export default ContactForm;
