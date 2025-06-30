import { useDispatch } from "react-redux";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import type ClassContact from "../../models/Contact";
import { editContact, removeContact } from "../../store/reducers/contact";
import * as GS from "../../styles";
import * as S from "./styled";

type PropsContact = ClassContact;

const CardContact = ({ id, name, email, phoneNumber, typeContact, favorite }: PropsContact) => {
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
        dispatch(editContact({ id, name, email: newEmail, phoneNumber: newPhone, typeContact, favorite }));
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
            <S.HeaderContact>
                <RxAvatar size={40} />
                <S.Avatar>
                    <S.TitleContact>
                        {edit && <em>Editando: </em>}
                        {name}</S.TitleContact>
                    <S.Email value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        disabled={!edit}>{email}</S.Email>
                </S.Avatar>
                <S.Tag tagcolor={typeContact}>{typeContact}</S.Tag>
                <S.Phone maxLength={11} disabled={!edit} value={newPhone}
                    onChange={(e) => setNewPhone(Number(e.target.value))}>{phoneNumber}</S.Phone>
                <span>{!favorite ? <VscHeart /> : <VscHeartFilled />}</span>
            </S.HeaderContact>

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
