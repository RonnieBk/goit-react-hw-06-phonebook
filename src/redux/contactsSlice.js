import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactsInitialState = () => {
  try {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts === null ? [] : JSON.parse(storedContacts);
  } catch (error) {
    console.log(error.message);
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(info) {
        return {
          payload: { id: nanoid(), name: info.name, number: info.number },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
