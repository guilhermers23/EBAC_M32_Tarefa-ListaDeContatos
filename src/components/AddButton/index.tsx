import { FaUserPlus } from "react-icons/fa";
import * as S from "./styled";

const AddButton = () => (
    <S.ButtonAdd to="/add"> <FaUserPlus /> Adicionar</S.ButtonAdd>
);

export default AddButton;
