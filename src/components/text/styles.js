import styled, { css } from "styled-components";

export const textComp = styled.p`
    ${({theme})=> css`
        font-size: ${theme.font.size.small};
        font-family: ${theme.font.family.default};
    `

    }
`