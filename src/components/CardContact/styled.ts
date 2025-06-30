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
  background-color: #fcfcfc;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-bottom: 32px;
  border-radius: 10px;
`;

export const HeaderContact = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px;
`;

export const Avatar = styled.span`
  align-items: center;
  gap: 5px;
`;

export const TitleContact = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Phone = styled.textarea`
  font-size: 18px;
  line-height: 24px;
  height: 25px;
  font-family: var(--font-mono);
  background-color: transparent;
  border: none;
  resize: none;
`;

export const Email = styled(Phone)`
  color: var(--color-gray);
  width: 300px;
`;

export const ActionsBar = styled.div`
  display: flex;
  justify-content: end;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const Tag = styled.span<PropsTagColor>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => checkBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;
