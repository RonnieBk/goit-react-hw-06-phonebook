import css from './ContactList.module.css';
import { useEffect } from 'react';
import { ContactListElement } from './ContactListElement';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log(error.message);
    }
  }, [contacts]);

  return (
    <ul className={css.list}>
      {foundContacts.map(contact => (
        <ContactListElement key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
