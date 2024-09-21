import styled, { css } from 'styled-components';
import { TextComp } from '../text/styles';

export const Container = styled.div`
    ${({theme})=>css`
        text-align: center;
        max-width: 100%;
        padding: 3rem 35rem;
        margin: 0 auto;
        
        a{
            color: ${theme.colors.secondary};
            text-decoration: none;
        }
        
        @media ${theme.media.tablet}{
            max-width: 58rem;
            padding: 3rem;
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