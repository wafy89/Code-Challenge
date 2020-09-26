import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  overflow-x: hidden;

  box-sizing: border-box;
  margin:none;
  width:100vw;

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
