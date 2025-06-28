import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import type { ReactNode } from "react";
import { changeFilter } from "../../store/reducers/filter";
import * as Enums from "../../utilities/enums/ContactEnums";
import * as S from "./styled";

type PropsCard = { label: string; value?: Enums.TypeContact; icon: ReactNode };

const CardFilter = ({ label, value, icon }: PropsCard) => {
    const dispatch = useDispatch();
    const { filter, contact } = useSelector((state: RootReducer) => state);

    const onFilter = () => { dispatch(changeFilter({ value })) };

    const conterContacts = (): number => {
        if (!value) return contact.length;
        const counter = contact.filter((type) => type.typeContact === value).length;
        return counter;
    };

    const isActive = (): string => {
        const active = filter.value === value;
        const booleanForString = active.toString();
        return booleanForString;
    };

    const hasActive = isActive();
    const counter = conterContacts();

    return (
        <S.Card active={hasActive} onClick={onFilter}>
            {icon}
            <S.Counter>{counter}</S.Counter>
            <S.Label>{label}</S.Label>
        </S.Card>
    )
};

export default CardFilter;
