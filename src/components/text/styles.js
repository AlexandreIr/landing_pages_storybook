import styled, { css } from "styled-components";

export const textComp = styled.p`
    ${({theme})=> css`
        color: ${theme.fonts.fontColors.secondaryFont};
        background-color: ${theme.colors.secondaryBg};
        font-size: ${theme.fonts.size.secondary};
    `

    }
`