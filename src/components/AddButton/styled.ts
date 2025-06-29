import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonAdd = styled(Link)`
  font-family: var(--font-mono);
  font-weight: bold;
  background-color: var(--color-green);
  color: #fff;
  position: fixed;
  padding: 10px;
  bottom: 48px;
  right: 48px;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 24px;
  transition: all ease-in 0.2s;
  &:hover {
    font-size: 28px;
    transition: all ease-in 0.2s;
  }
`;
