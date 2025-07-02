import { useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import CardContact from "../../components/CardContact";
import * as GS from "../../styles";
import * as S from "./styled";
import { inserContactListExemple } from "../../db/dataContacts";

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
    //Carregar Tarefas para exemplo
    const loadContactsLocal = () => {
        inserContactListExemple();
        window.location.reload();
    };

    return (
        <GS.Main>
            <GS.Title as="p">{showMessage(contacts.length)}
            </GS.Title>
            {contactsList.length === 0 && <GS.Button onClick={loadContactsLocal}>Carregar contatos de exemplo</GS.Button>}
            <S.SectionCard>
                {contacts.map((contact) => (
                    <CardContact key={contact.id} {...contact} />
                ))}
            </S.SectionCard>
        </GS.Main >
    )
};

export default ContactList;
