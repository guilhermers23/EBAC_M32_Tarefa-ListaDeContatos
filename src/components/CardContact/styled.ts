import styled from "styled-components";
import * as Enums from "../../utilities/enums/ContactEnums";

type PropsTagColor = { tagcolor: Enums.TypeContact };

const checkBackgroundColor = (props: PropsTagColor): string => {
  if (props.tagcolor === Enums.TypeContact.AMIGO) {
    return "var(--cor-amigo)";
  } else if (props.tagcolor === Enums.TypeContact.FAMILIA) {
    return "var(--cor-familia)";
  } else if (props.tagcolor === Enums.TypeContact.TRABALHO) {
    return "var(--cor-trabalho)";
  } else {
    return "var(--cor-pessoal)";
  }
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  gap: 5px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-top: 5px solid #000000;
  border-right: 5px inset rgb(10, 10, 10);
  border-bottom: 5px groove #000000;
  border-left: 10px solid #000000;
  margin-bottom: 32px;
  border-radius: 10px;
`;

export const Avatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const TitleContact = styled.h3`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

export const InfosContact = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 25px;

  label {
    padding: 10px;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: rgb(80, 191, 242);
  }
  input {
    width: 100%;
    font-size: 18px;
    border: none;
    line-height: 24px;
    font-family: var(--font-mono);
    background-color: transparent;
  }
`;

export const ActionsBar = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 16px;
`;

export const Tag = styled.span<PropsTagColor>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) => checkBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
`;
