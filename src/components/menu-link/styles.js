import styled, { css } from 'styled-components';

export const Menu = styled.a`
    ${({theme})=>css`
        font-size: ${theme.font.size.small};
        text-decoration: none;
        display: block;
        padding: ${theme.spacing.small};
        position: relative;

        &::after{
            content: '';
            position: absolute;
            bottom: 1rem;
            left: 50%;
            width: 0;
            height: 0.2rem;
            background-color: ${theme.colors.secondary};
            transition: all 300ms ease-in-out;
        }
        &:hover::after{
            left: 25%;
            width: 50%;
        }
    `}
`;