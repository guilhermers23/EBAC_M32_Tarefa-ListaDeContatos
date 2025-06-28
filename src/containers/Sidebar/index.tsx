import CardFilter from "../../components/CardFilter";
import * as S from "./styled";
import * as GS from "../../styles";

const Sidebar = () => {
    return (
        <S.Aside>
            <div>
                <GS.Input type="text" placeholder="Buscar Contato" />
                <S.Filters>
                    <CardFilter counter={45} label="Todos" type="Todos" hasActive={true} />
                    <CardFilter counter={5} hasActive={false} label="Familia" type="Familia" />
                    <CardFilter counter={10} hasActive={false} label="Trabalho" type="Trabalho" />
                    <CardFilter counter={15} hasActive={false} label="Pessoal" type="Pessoal" />
                    <CardFilter counter={20} hasActive={false} label="Amigo(a)" type="Amigo(a)" />
                </S.Filters>
            </div>
        </S.Aside>
    )
};

export default Sidebar;
