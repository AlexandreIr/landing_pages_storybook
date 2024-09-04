import styled, { css } from "styled-components";

export const textComp = styled.p`
    ${({theme})=> css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.secondary};
        font-size: ${theme.font.size.normal};
        font-family: ${theme.font.family.secondary};
    `

    }
`