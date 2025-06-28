import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import type { ReactNode } from "react";
import * as Enums from "../../utilities/enums/ContactEnums";
import * as S from "./styled";
import { changeFilter } from "../../store/reducers/filter";

type PropsCard = { label: string; typeValue?: Enums.TypeContact; icon: ReactNode };

const CardFilter = ({ label, counter, typeValue, icon }: PropsCard) => {
    const dispatch = useDispatch();
    const { filter, contacts } = useSelector((state: RootReducer) => state);

    const onFilter = () => { dispatch(changeFilter({ valueType })) };

    const isActive = (): boolean => {
        return filter.valueType === typeValue;
    };

    const hasActive = isActive();

    return (
        <S.Card active={hasActive} onClick={onFilter}>
            {icon}
            <S.Counter>{counter}</S.Counter>
            <S.Label>{label}</S.Label>
        </S.Card>
    )
};

export default CardFilter;
