import styled, { css } from 'styled-components';
import { TextComp } from '../text/styles';

export const Container = styled.div`
    ${({theme})=>css`
        position: static;
        width: 100%;
        bottom: 0;
        text-align: center;
        padding: ${theme.spacing.small} 0;
        
        ${TextComp}{
            font-size: ${theme.font.size.small};
        }
        a{
            color: inherit;
            text-decoration: none;
        }

        @media ${theme.media.smallPhone}{
            text-align: center;
        }
    `}
`;