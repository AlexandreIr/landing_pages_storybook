import styled, { css } from 'styled-components';

export const Container = styled.a`
    ${({theme})=>css`
        font-size: ${theme.font.size.large};
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        > img {
            max-height: 7rem;
            position: absolute;
            top: 0;
        }
    `}
`;