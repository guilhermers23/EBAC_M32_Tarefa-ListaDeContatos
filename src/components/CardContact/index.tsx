import { useDispatch } from "react-redux";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import type ClassContact from "../../models/Contact";
import { editContact, removeContact } from "../../store/reducers/contact";
import * as GS from "../../styles";
import * as S from "./styled";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

type PropsContact = ClassContact;

const CardContact = ({ id, name, email, phoneNumber, typeContact }: PropsContact) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [newPhone, setNewPhone] = useState(phoneNumber);
    const [newEmail, setNewEmail] = useState(email);

    const cancelEdit = () => {
        setEdit(false);
        setNewPhone(phoneNumber);
        setNewEmail(email);
    };

    const saveEdit = () => {
        dispatch(editContact({ id, name, email: newEmail, phoneNumber: newPhone, typeContact }));
        setEdit(false);
    };

    const deleteContact = (id: number) => {
        const result = confirm("Deseja excluir este contato?");
        if (result === true) {
            dispatch(removeContact(id));
        }
        return;
    };

    return (
        <S.Card>
            <S.Avatar>
                <S.TitleContact>
                    <RxAvatar size={40} />
                    {edit && <em>Editando: </em>}
                    {name}
                </S.TitleContact>
                <S.Tag tagcolor={typeContact}>{typeContact}</S.Tag>
            </S.Avatar>

            <S.InfosContact>
                <label htmlFor="email"><MdOutlineEmail /></label>
                <input type="email" id="email"
                    value={newEmail} onChange={e => setNewEmail(e.target.value)}
                    disabled={!edit}
                />
            </S.InfosContact>

            <S.InfosContact>
                <label htmlFor="phone"><BsTelephone /></label>
                <input type="tel" id="phone"
                    maxLength={11} disabled={!edit} value={newPhone}
                    onChange={e => setNewPhone(e.target.value)}
                />
            </S.InfosContact>

            <S.ActionsBar>
                {!edit ? (
                    <>
                        <GS.Button onClick={() => setEdit(true)}>Editar</GS.Button>
                        <GS.RedButton onClick={() => deleteContact(id)}>Excluir</GS.RedButton>
                    </>
                ) : (
                    <>
                        <GS.SaveButton onClick={saveEdit}>Salvar</GS.SaveButton>
                        <GS.RedButton onClick={cancelEdit}>Cancelar</GS.RedButton>
                    </>
                )}
            </S.ActionsBar>
        </S.Card >
    )
};

export default CardContact;
