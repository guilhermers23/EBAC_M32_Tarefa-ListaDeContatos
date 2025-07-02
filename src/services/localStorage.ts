import type ClassContact from "../models/Contact";

export const loadContactsFromLocalStorage = (): ClassContact[] => {
  try {
    const hasContactsLocal = localStorage.getItem("contactsList");
    if (hasContactsLocal === null) {
      return [];
    }
    return JSON.parse(hasContactsLocal);
  } catch (error) {
    console.error("Ocorreu erro ao obter dados do localStorage.", error);
    return [];
  }
};

export const saveContactToLocalStorage = (contacts: ClassContact[]) => {
  try {
    const hasContactsLocal = JSON.stringify(contacts);
    localStorage.setItem("contactsList", hasContactsLocal);
  } catch (error) {
    console.error("Ocorreu erro ao obter dados do localStorage.", error);
  }
};
