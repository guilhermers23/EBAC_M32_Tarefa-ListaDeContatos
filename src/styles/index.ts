import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
  --font-rubik: "Rubik", sans-serif;
  --font-mono: "Share Tech Mono", monospace;

  --color-gray: #666666;
  --color-gray2: #999999;
  --color-gray3: #cccccc;
  --color-green: #abdb25;
  --color-white: #ffffff;
  --color-black: #000000;
  --color-red: #ed3232;

  --cor-amigo: #025685;
  --cor-trabalho: #1810eb;
  --cor-familia: #eb10b0;
  --cor-pessoal: #069959;

  background-color: var(--color-gray3)
}

*{
    font-family: var(--font-rubik);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}
`;

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 225px auto;
  @media (max-width: 720px) {
    grid-template-columns: 25% auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: auto;
  margin-bottom: 26px;
`;

export const Title = styled.h2`
  text-align: center;
  display: block;
  margin: 48px 0;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  border-radius: 5px;
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

export const SaveButton = styled(Button)`
  background-color: var(--color-green);
`;

export const RedButton = styled(Button)`
  background-color: var(--color-red);
`;

export default GlobalStyled;
