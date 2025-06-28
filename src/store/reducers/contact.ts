import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Contact from "../../models/Contact";
import * as Enums from "../../utilities/enums/ContactEnums";

const initialState: Contact[] = [
  {
    id: 1,
    name: "Guilherme Rosa da Silva",
    email: "guilherme@outlook.com",
    phoneNumber: 27996263824,
    typeContact: Enums.TypeContact.PESSOAL,
    favorite: false,
  },
  {
    id: 2,
    name: "Mamãe Rosa",
    email: "mae@outlook.com",
    phoneNumber: 27996263824,
    typeContact: Enums.TypeContact.FAMILIA,
    favorite: true,
  },
  {
    id: 3,
    name: "Papai Silva",
    email: "pai@outlook.com",
    phoneNumber: 27996263824,
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
  },
});

export const { removeContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
