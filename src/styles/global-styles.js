import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }
    body{
        font-size: ${({theme})=>theme.font.size.normal};
        font-family: ${({theme})=>theme.font.family.default};
    }
    h1{
        font-size: ${({theme})=>theme.font.size.big};
        font-family: ${({theme})=>theme.font.family.secondary};
    }
`