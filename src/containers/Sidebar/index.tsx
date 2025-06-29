import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdFamilyRestroom, MdOutlineWork } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiContactsFill } from "react-icons/ri";
import type { RootReducer } from "../../store";
import CardFilter from "../../components/CardFilter";
import { changeTerm } from "../../store/reducers/filter";
import * as Enums from "../../utilities/enums/ContactEnums";
import * as S from "./styled";
import * as GS from "../../styles";

type PropsSidebar = { showFilter: boolean; }

const Sidebar = ({ showFilter }: PropsSidebar) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { term } = useSelector((state: RootReducer) => state.filter);

    const onChangeTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTerm(event.target.value));
    };

    return (
        <S.Aside>
            {showFilter ? (
                <div>
                    <S.inputSearch type="text" placeholder="Buscar Contato"
                        value={term} onChange={onChangeTerm} />
                    <S.Filters>
                        <CardFilter label="Todos" icon={<IoMdContacts size={25} />}
                        />
                        <CardFilter label="Pessoal" icon={<RiContactsFill size={25} />}
                            value={Enums.TypeContact.PESSOAL}
                        />
                        <CardFilter label="Familia" icon={<MdFamilyRestroom size={25} />}
                            value={Enums.TypeContact.FAMILIA}
                        />
                        <CardFilter label="Trabalho" icon={<MdOutlineWork size={25} />}
                            value={Enums.TypeContact.TRABALHO}
                        />
                        <CardFilter label="Amigo(a)" icon={<LiaUserFriendsSolid size={25} />}
                            value={Enums.TypeContact.AMIGO}
                        />
                    </S.Filters>
                </div>
            ) : (
                <GS.Button onClick={() => navigate("/")}>Voltar para lista</GS.Button>
            )}
        </S.Aside>
    )
};

export default Sidebar;
