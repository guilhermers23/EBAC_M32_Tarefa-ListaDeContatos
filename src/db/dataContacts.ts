import * as Enums from "../utilities/enums/ContactEnums";

const contactListExemple = [
  {
    id: 1,
    name: "Guilherme Rosa da Silva",
    email: "guilhermers2014@outlook.com",
    phoneNumber: "27996263824",
    typeContact: Enums.TypeContact.PESSOAL,
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    email: "lewis@hamilton.com",
    phoneNumber: "27998444444",
    typeContact: Enums.TypeContact.AMIGO,
  },
  {
    id: 3,
    name: "Gabriel Bortoleto",
    email: "gabriel@bortoleto.com",
    phoneNumber: "27998555555",
    typeContact: Enums.TypeContact.FAMILIA,
  },
  {
    id: 4,
    name: "Peter Parker",
    email: "peter@gmail.com",
    phoneNumber: "279942424242",
    typeContact: Enums.TypeContact.TRABALHO,
  },
];

export const inserContactListExemple = () =>
  localStorage.setItem("contactsList", JSON.stringify(contactListExemple));
