import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 550px;
  gap: 10px;
  padding: 15px;
  border-radius: 10px;

  label {
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const Options = styled.section`
  margin-bottom: 16px;

  p {
    margin: 10px 0;
    font-weight: bold;
  }

  label {
    margin-right: 8px;
    margin-left: 2px;
  }
`;

export const Option = styled.span`
  display: inline;
  text-transform: capitalize;
`;
