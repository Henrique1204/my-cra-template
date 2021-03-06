import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.3;
  }

  p,
  a,
  ul,
  li,
  small,
  textarea {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }


  html, body, #root {
    width: 100%;
    height: 100vh;
    border: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  button, a {
    cursor: pointer;
  }
`;
