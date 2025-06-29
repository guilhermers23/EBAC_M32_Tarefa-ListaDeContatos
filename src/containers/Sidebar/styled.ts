import styled from "styled-components";
import { Input } from "../../styles";

export const Aside = styled.aside`
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
