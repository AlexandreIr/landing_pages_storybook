import styled, { css } from "styled-components";

export const TextComp = styled.div`
    ${({theme})=> css`
        font-size: ${theme.font.size.small};
        font-family: ${theme.font.family.default};
    `
    }
`