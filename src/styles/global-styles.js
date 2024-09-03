import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        ${({theme})=> css`
            background:${theme.colors.mainBg};
            font-family: ${theme.fonts.mainFont};
        `}
    }
    p{
        ${({theme})=> css`
            font-family: ${theme.fonts.secondaryFont};
        `}
    }
    h2{
        ${({theme})=> css`
            font-family: ${theme.fonts.thirdFont};
        `}
    }
`