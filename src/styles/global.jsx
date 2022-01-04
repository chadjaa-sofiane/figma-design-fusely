import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *,*::after,*::before{
       padding:0;
       margin:0;
       box-sizing: border-box;
       font-family: "Open Sans";
       font-style: normal;
   }
   body{
       width: 100vw;
       height: 100vh;
       max-width: 100%;
       font-size: 16px;
       font-family: "Open Sans";
   }
`;

export default GlobalStyle;
