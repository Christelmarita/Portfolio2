import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #fff4f8;
    color: #000022;
  }

  h1, h2, h3, h4, h5, h6, a {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }

  a {
    text-transform: lowercase;
    font-weight: 400;
    color: #143d29;

    &:hover {
      color: #344e41;
    }
    i {
      margin-right: 5px;
    }
  }
`;

export default GlobalStyle;