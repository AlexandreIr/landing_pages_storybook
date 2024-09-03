import styled, { css } from "styled-components";

export const title = styled.h1`
    ${({theme})=> css`
        background-color: ${theme.colors?.mainBg};
        font-size: ${theme.fonts.size?.primary};
        color:${theme.fonts.fontColors?.secondaryFont};
        font-family: ${theme.fonts.thirdFont};
    `}
`