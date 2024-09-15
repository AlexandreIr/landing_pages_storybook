import styled, { css } from 'styled-components';

export const Container = styled.a`
    ${({theme})=>css`
        font-size: ${theme.font.size.xxsmall};
        width: 4rem;
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.primary};
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        z-index: 6;
        opacity: 0.7;
    `}
`;