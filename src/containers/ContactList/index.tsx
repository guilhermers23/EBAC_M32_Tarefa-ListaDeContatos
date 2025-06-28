import { useSelector } from "react-redux";
import Contact from "../../components/Contact";
import * as GS from "../../styles";
import type { RootReducer } from "../../store";

const ContactList = () => {
    const contactsList = useSelector((state: RootReducer) => state.contact);
    const { term, valueType } = useSelector((state: RootReducer) => state.filter);
    //Lógica para filtrar os contatos
    const filterContacts = () => {
        let filteredContacts = contactsList;
        if (term !== undefined) {
            filteredContacts = filteredContacts.filter(({ name }) => name.toLowerCase().search(term.toLowerCase()) >= 0);

            if (valueType !== undefined) {
                filteredContacts = filteredContacts.filter(({ type }) => type === valueType);
            };

            return filteredContacts;
        } else {
            return contactsList;
        }
    };

    const showMessage = (numberOfContacts: number) => {
        let message = "";
        const complement = term !== undefined && term.length > 0 ? `e "${term}"` : "";

        if (valueType === undefined) {
            message = `${numberOfContacts} contato(s) encontrado(s) marcado(s) como: "Todas" ${complement}.`
        }
        else {
            message = `${numberOfContacts} contato(s) encontrado(s) marcado(s) como: "${valueType}" ${complement}.`
        }
        return message;
    };

    const contacts = filterContacts();

    return (
        <GS.Main>
            <GS.Title as="p">{showMessage(contacts.length)}</GS.Title>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <Contact {...contact} />
                    </li>
                ))}
            </ul>
        </GS.Main >
    )
};

export default ContactList;
