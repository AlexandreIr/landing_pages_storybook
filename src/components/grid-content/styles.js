import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme})=>css`
        text-align: center;
        max-width: 580px;
        margin: 0 auto;

        a{
            color: ${theme.colors.secondary};
            text-decoration: none;
        }
    `}
`;

export const Html = styled.div`
    ${({theme})=>css`
        margin: ${theme.spacing.xhuge} 0;
    `}
`;