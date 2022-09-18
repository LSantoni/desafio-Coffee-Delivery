import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme.background};
    box-shadow: none;
  }

  body, p, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  header {
    font-family: 'Baloo 2', serif;
    font-weight: 700;
    font-size: 1.125rem;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;