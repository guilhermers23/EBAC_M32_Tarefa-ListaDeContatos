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

  background-color: var(--color-gray3);
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
`;

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export default GlobalStyled;
