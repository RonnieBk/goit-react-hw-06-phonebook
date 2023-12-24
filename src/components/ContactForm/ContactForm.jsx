import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    const foundContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (foundContact) {
      alert(`${newContact.name} is already in contacts.`);
    } else dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={css.formLabel}>
        Name
      </label>
      <input
        type="text"
        name="name"
        className={css.formInput}
        id="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="phone" className={css.formLabel}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="phone"
        className={css.formInput}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};
