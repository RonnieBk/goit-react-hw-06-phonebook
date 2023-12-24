import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = () => {
  try {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts === null ? [] : JSON.parse(storedContacts);
  } catch (error) {
    console.log(error.message);
  }
};

const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(setFilter, (_, action) => {
    return action.payload;
  });
});
