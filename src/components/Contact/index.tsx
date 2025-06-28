import { RxAvatar } from "react-icons/rx";
import * as Enums from "../../utilities/enums/ContactEnums";
import * as GS from "../../styles";
import * as S from "./styled";

const Contact = () => {
    return (
        <S.Card>
            <S.HeaderContact>
                <RxAvatar size={40} />
                <S.Avatar>
                    <S.TitleContact>Guilherme Rosa da Silva</S.TitleContact>
                    <S.Email>guilhermers2014@outlook.com</S.Email>
                </S.Avatar>
                <S.Tag tagcolor={Enums.TypeContact.PESSOAL}>{Enums.TypeContact.PESSOAL}</S.Tag>
                <S.Phone>Telefone: 27 996263824</S.Phone>
            </S.HeaderContact>

            <S.ActionsBar>
                <GS.Button>Editar</GS.Button>
                <GS.RedButton>Excluir</GS.RedButton>
            </S.ActionsBar>
        </S.Card>
    )
};

export default Contact;
