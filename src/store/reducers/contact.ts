import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Contact from "../../models/Contact";
import * as Enums from "../../utilities/enums/ContactEnums";

const initialState: Contact[] = [
  {
    id: 1,
    name: "Guilherme Rosa da Silva",
    email: "guilherme@outlook.com",
    phoneNumber: "27996263824",
    typeContact: Enums.TypeContact.PESSOAL,
    favorite: false,
  },
  {
    id: 2,
    name: "Mamãe Rosa",
    email: "mae@outlook.com",
    phoneNumber: "27996263824",
    typeContact: Enums.TypeContact.FAMILIA,
    favorite: true,
  },
  {
    id: 3,
    name: "Papai Silva",
    email: "pai@outlook.com",
    phoneNumber: "27996263824",
    typeContact: Enums.TypeContact.FAMILIA,
    favorite: false,
  },
];

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    removeContact: (state, action: PayloadAction<number>) => {
      const setState = state.filter(({ id }) => id !== action.payload);
      return setState;
    },

    editContact: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (indexContact > 0) {
        state[indexContact] = action.payload;
      }
    },

    addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
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
      }
    },
  },
});

export const { removeContact, editContact, addContact } = contactSlice.actions;
export default contactSlice.reducer;
