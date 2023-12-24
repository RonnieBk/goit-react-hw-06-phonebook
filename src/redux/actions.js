import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', contact => {
  return {
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filter/setFilter');
