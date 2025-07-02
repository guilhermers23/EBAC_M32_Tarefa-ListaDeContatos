import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  loadContactsFromLocalStorage,
  saveContactToLocalStorage,
} from "../../services/localStorage";
import type ClassContact from "../../models/Contact";

const initialState: ClassContact[] = loadContactsFromLocalStorage();

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    removeContact: (state, action: PayloadAction<number>) => {
      const newState = state.filter(({ id }) => id !== action.payload);
      saveContactToLocalStorage(newState);
      return newState;
    },

    editContact: (state, action: PayloadAction<ClassContact>) => {
      const indexContact = state.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (indexContact >= 0) {
        state[indexContact] = action.payload;
        saveContactToLocalStorage(state);
      }
    },

    addContact: (state, action: PayloadAction<Omit<ClassContact, "id">>) => {
      const hasContact = state.find(
        ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (hasContact) {
        alert("Contato já existente na sua lista.");
      } else {
        const lastContact = state.length > 0 ? state[state.length - 1] : null;
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1,
        };
        state.push(newContact);
        saveContactToLocalStorage(state);
      }
    },
  },
});

export const { removeContact, editContact, addContact } = contactSlice.actions;
export default contactSlice.reducer;
