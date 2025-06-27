import { MdOutlineContactPhone } from "react-icons/md";
import * as S from "./styled";

const Navbar = () => (
    <S.Navbar>
        <S.Logo>
            <MdOutlineContactPhone size='25' />
            <h1> Lista de contatos </h1>
        </S.Logo>
    </S.Navbar>
);

export default Navbar;
