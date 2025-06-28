import { useSelector } from "react-redux";
import Contact from "../../components/Contact";
import * as GS from "../../styles";
import type { RootReducer } from "../../store";

const ContactList = () => {
    const contactsList = useSelector((state: RootReducer) => state.contact);

    return (
        <GS.Main>
            <GS.Title> Todos contatos</GS.Title>
            <ul>
                {contactsList.map((contact) => (
                    <li key={contact.id}>
                        <Contact {...contact} />
                    </li>
                ))}
            </ul>
        </GS.Main >
    )
};

export default ContactList;
