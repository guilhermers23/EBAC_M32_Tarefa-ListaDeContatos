import { useDispatch } from "react-redux";
import { RxAvatar } from "react-icons/rx";
import * as GS from "../../styles";
import * as S from "./styled";
import type ClassContact from "../../models/Contact";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { editContact, removeContact } from "../../store/reducers/contats";
import { useState } from "react";

type PropsContact = ClassContact;

const Contact = ({ id, name, lastName, email, phoneNumber, type, favorite }: PropsContact) => {
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
        dispatch(editContact({ id, name, lastName, email: newEmail, phoneNumber: newPhone, type, favorite }));
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
                        {name} {lastName}</S.TitleContact>
                    <S.Email value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        disabled={!edit}>{email}</S.Email>
                </S.Avatar>
                <S.Tag tagcolor={type}>{type}</S.Tag>
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

export default Contact;
