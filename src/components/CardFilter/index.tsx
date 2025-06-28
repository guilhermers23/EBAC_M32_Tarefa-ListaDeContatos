import { MdFamilyRestroom } from "react-icons/md";
import * as Enums from "../../utilities/enums/ContactEnums";
import * as S from "./styled";

type PropsCard = {
    label: string;
    type: Enums.TypeContact;
    counter: number;
    hasActive: boolean;
};

const CardFilter = ({ label, counter, hasActive }: PropsCard) => {
    return (
        <S.Card active={hasActive}>
            <MdFamilyRestroom size={25} />
            <S.Counter>{counter}</S.Counter>
            <S.Label>{label}</S.Label>
        </S.Card>
    )
};

export default CardFilter;
