import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #F0F4F8;
    color: #000022;
  }

  h1, h2, h3, h4, h5, h6, a {
    font-family: 'Archivo Black', sans-serif;
    font-weight: 400;
  }

  a {

    &:hover {
      color: #344e41;
      
    }
    i {
      margin-right: 5px;
    }
  }
`;

export default GlobalStyle;