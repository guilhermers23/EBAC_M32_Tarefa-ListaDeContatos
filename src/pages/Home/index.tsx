import ContactList from "../../containers/ContactList";
import Sidebar from "../../containers/Sidebar";
import * as GS from "../../styles";

const Home = () => {
    return (
        <GS.Container>
            <Sidebar showFilter />
            <ContactList />
        </GS.Container>
    )
};

export default Home;
