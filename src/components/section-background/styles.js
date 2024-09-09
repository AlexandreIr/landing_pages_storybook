import styled, { css } from 'styled-components';

const containerBgActivate = (theme) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white}
`

export const Container = styled.div`
    ${({theme, background})=>css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
        ${background && containerBgActivate(theme)};
        min-height: 100vh;
        display: flex;
        align-items: center;
    `}
`;