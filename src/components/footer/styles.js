import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({theme})=>css`
        padding: ${theme.spacing.xsmall} 0;
        p{
            font-size: ${theme.font.size.xsmall};
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