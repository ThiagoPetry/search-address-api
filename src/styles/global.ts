import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-size: border-box;
  }

  body {
    background: #ededed;
    cursor: default;
  }

  body {
    font: 2em Roboto, sans-serif;
  }

  #root {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    font-weight: bold;
    color: #8f8f8f;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #2FAACE;
  }
`;
