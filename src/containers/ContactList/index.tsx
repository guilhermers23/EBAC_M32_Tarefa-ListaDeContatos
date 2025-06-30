import { useSelector } from "react-redux";

import type { RootReducer } from "../../store";
import * as GS from "../../styles";
import CardContact from "../../components/CardContact";

const ContactList = () => {
    const contactsList = useSelector((state: RootReducer) => state.contact);
    const { term, value } = useSelector((state: RootReducer) => state.filter);
    //Lógica para filtrar os contatos
    const filterContacts = () => {
        let filteredContacts = contactsList;
        if (term !== undefined) {
            filteredContacts = filteredContacts.filter(({ name }) => name.toLowerCase().search(term.toLowerCase()) >= 0)

            if (value !== undefined) {
                filteredContacts = filteredContacts.filter(({ typeContact }) => typeContact === value);
            };
            return filteredContacts;
        } else {
            return contactsList;
        }
    };

    const showMessage = (numberOfContacts: number) => {
        let message = "";
        const complement = term !== undefined && term.length > 0 ? `e "${term}"` : "";

        if (value === undefined) {
            message = `${numberOfContacts} contato(s) encontrado(s) marcado(s) como: "Todas" ${complement}.`
        }
        else {
            message = `${numberOfContacts} contato(s) encontrado(s) marcado(s) como: "${value}" ${complement}.`
        }
        return message;
    };

    const contacts = filterContacts();

    return (
        <GS.Main>
            <GS.Title as="p">{showMessage(contacts.length)}</GS.Title>
            {contacts.map((contact) => (
                <CardContact key={contact.id} {...contact} />
            ))}
        </GS.Main >
    )
};

export default ContactList;
