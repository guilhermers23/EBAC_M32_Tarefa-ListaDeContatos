import styled from "styled-components";
import { Button, Input } from "../../styles";

export const Aside = styled.aside`
  text-align: center;
  background-color: var(--color-white);
  height: 100vh;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const inputSearch = styled(Input)`
  width: 90%;
  margin: 5%;
`;

export const BackButton = styled(Button)`
  margin: 16px 0;
`;
