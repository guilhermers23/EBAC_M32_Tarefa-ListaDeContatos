import AddButton from "../../components/AddButton";
import ContactList from "../../containers/ContactList";
import Sidebar from "../../containers/Sidebar";
import * as GS from "../../styles";

const Home = () => {
    return (
        <GS.Container>
            <Sidebar showFilter />
            <ContactList />
            <AddButton />
        </GS.Container>
    )
};

export default Home;
