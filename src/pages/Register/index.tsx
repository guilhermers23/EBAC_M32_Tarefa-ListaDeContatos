import FormRegister from "../../containers/FormRegister";
import Sidebar from "../../containers/Sidebar";
import * as  GS from "../../styles";

const Register = () => (
    <GS.Container>
        <Sidebar showFilter={false} />
        <FormRegister />
    </GS.Container>
);

export default Register;
