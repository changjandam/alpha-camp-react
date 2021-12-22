import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    max-width: 1440px;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
