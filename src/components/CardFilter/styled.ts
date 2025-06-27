import styled from "styled-components";

type PropsCardActive = { active: boolean };

export const Card = styled.div<PropsCardActive>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border: 2px solid ${(props) => (props.active ? "#4C3BCF" : "#a1a1a1")};
  background-color: ${(props) => (props.active ? "#FFF" : "#fcfcfc")};
  color: ${(props) => (props.active ? "#4C3BCF" : "#5e5e5e")};
  border-radius: 7px;
  cursor: pointer;
`;

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`;

export const Label = styled.span`
  font-size: 16px;
`;
