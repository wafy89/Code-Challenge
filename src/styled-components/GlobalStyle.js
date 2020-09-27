import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
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
      transition:all ease .1s ;
      padding: 0;
      margin: 0 ;
      box-sizing: border-box;
      a, a:active,a:visited ,a:link{
        text-decoration: none;
      }
    }
  }
`;
