import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *,*::after,*::before{
       padding:0;
       margin:0;
       box-sizing: border-box;
   }
   body{
       width: 100vw;
       height: 100vh;
       font-size: 16px;
       font-family: "Open Sans";
   }
`;

export default GlobalStyle;
