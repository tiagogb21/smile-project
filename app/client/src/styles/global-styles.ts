import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '../interface/theme.interface';

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
