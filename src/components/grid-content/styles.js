import styled, { css } from 'styled-components';
import { TextComp } from '../text/styles';

export const Container = styled.div`
    ${({theme})=>css`
        text-align: center;
        max-width: 58rem;
        align-items: center;
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

        @media ${theme.media.smallPhone}{
            ${TextComp}{
                font-size: 1.2rem;
            }
        }
    `}
`;