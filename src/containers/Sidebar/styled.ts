import styled from "styled-components";
import { Button, Input } from "../../styles";

export const Aside = styled.aside`
  text-align: center;
  background-color: var(--color-white);
  height: 100vh;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
  }
`;

export const inputSearch = styled(Input)`
  width: 90%;
  margin: 5%;
`;

export const BackButton = styled(Button)`
  margin: 16px 0;
`;
