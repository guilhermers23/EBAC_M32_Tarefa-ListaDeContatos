import { useState } from "react";
import * as Enums from "../../utilities/enums/ContactEnums";
import * as GS from "../../styles";
import * as S from "./styled";

const FormRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [typeContact, setTypeContact] = useState('');

    const registerForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(name, email, phone, typeContact);
        alert("Formulário enviado!");
    };

    return (
        <GS.Main>
            <GS.Title>Adicinar novo contato</GS.Title>
            <S.Form onSubmit={registerForm}>
                <label htmlFor="name">Nome Completo</label>
                <GS.Input type="text" id="name" placeholder="Digite nome completo..."
                    value={name} onChange={e => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">E-mail</label>
                <GS.Input type="text" id="email" placeholder="Insirir e-mail..."
                    value={email} onChange={e => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="phone">Telefone</label>
                <GS.Input type="tel" id="phone" placeholder="Insira número de telefone..."
                    value={phone} onChange={e => setPhone(e.target.value)}
                    required
                />
                <S.Options>
                    <p>Tipo de contato</p>
                    {Object.values(Enums.TypeContact).map((type) => (
                        <S.Option key={type}>
                            <input type="radio" id={type} value={type} name="type"
                                onChange={e => setTypeContact(e.target.value)}
                                required />
                            <label htmlFor={type}>{type}</label>
                        </S.Option>
                    ))}
                </S.Options>
                <GS.SaveButton type="submit">Salvar</GS.SaveButton>
            </S.Form>
        </GS.Main>
    )
};

export default FormRegister;
