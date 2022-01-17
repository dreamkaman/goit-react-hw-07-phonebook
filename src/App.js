import { useSelector, useDispatch } from 'react-redux';
import { changeFilterAction } from './redux/filter/filterAction';

import ContactForm from './components/ContactForm';
import Section from './components/Section';
import ContactList from './components/ContactList';
import InputElement from './components/ContactForm/InputElement';

import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // function isContactExist(name) {
  //   return !!contacts.find(contact => contact.name.toUpperCase().includes(name.toUpperCase()));
  // }

  // function filterContacts() {
  //   return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  // }

  // const handleDelete = id => {
  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   setContacts(newContacts);

  // };

  //Обработчик события
  // const addContact = (name, number) => {
  //   if (isContactExist(name)) {
  //     alert(`${name} is already in contacts!`);

  //     return;
  //   }

  //   const id = nanoid();

  //   setContacts(prevstate => [...prevstate, { id, name, number }]);
  //   setFilter('');
  // };

  const handleChange = event => {
    dispatch(changeFilterAction(event.target.value));
  };

  // useEffect(() => {
  //   const arr = JSON.parse(localStorage.getItem('contacts'));
  //   if (arr?.length) {
  //     setContacts(arr);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <InputElement
          className={styles.filter}
          name="filter"
          type="text"
          value={filter}
          text="Find contacts by name"
          onChange={handleChange}
        />
        <ContactList />
      </Section>
    </>
  );
}

export default App;
