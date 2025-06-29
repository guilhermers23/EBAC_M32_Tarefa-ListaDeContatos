import styled from "styled-components";

type PropsCardActive = { active: string };

export const Card = styled.div<PropsCardActive>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-left: 7px solid
    ${({ active }) => (active === "true" ? "#4C3BCF" : "#a1a1a1")};
  background-color: ${({ active }) => (active === "true" ? "#FFF" : "#fcfcfc")};
  color: ${({ active }) => (active === "true" ? "#4C3BCF" : "#5e5e5e")};
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
