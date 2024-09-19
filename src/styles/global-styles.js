import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        scroll-behavior: smooth;
        font-size: 62.5%;
    }
    body{
        font-size: 1.6rem;
        font-family: ${({theme})=>theme.font.family.default};
    }
    h1{
        font-size: ${({theme})=>theme.font.size.big};
        font-family: ${({theme})=>theme.font.family.secondary};
    }
    p{
        margin: ${({theme})=>theme.spacing.normal};
    }
    ul, ol {
        margin: ${({theme})=>theme.spacing.normal};
        padding: ${({theme})=>theme.spacing.normal};
    }

`