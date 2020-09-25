import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  overflow-x: hidden;
  font-size: 62.5%;
  box-sizing: border-box;
  margin:none;
  width:100vw;

  @media (min-width: 1024px) {
    font-size: 100%;
  }
}
  body {
    position:relative;
    margin:none;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    background-color: #fff;
    width:100vw;
    *{
      font-family: 'Assistant', sans-serif;
      padding: 0;
      margin: 0 ;
      box-sizing: border-box;

    }
  }
`;
