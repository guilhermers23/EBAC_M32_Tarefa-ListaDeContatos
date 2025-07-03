import styled from "styled-components";

export const SectionCard = styled.section`
  display: grid;
  grid-template-columns: 49% 49%;
  gap: 2%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
