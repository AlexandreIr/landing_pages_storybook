import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme})=>css`
        margin: 0 auto;
        padding: 5rem 0;
        h2 {
            margin-top: ${theme.spacing.large};
        }
    `}
    `;
export const GridImages = styled.div`
    ${({theme})=>css`
        display: grid;
        margin-top: 5rem;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacing.large};
        align-items: center;
    `}
`;

export const GridElement = styled.div `
    ${({theme})=>css`
        overflow: hidden;
    `}
`;

export const Image = styled.img`
    ${({theme})=>css`
        width: 100%;
        transition: all 500ms ease-in-out;

        &:hover{
            transform: scale(1.01) rotate(5deg);
        }
    `}
`;