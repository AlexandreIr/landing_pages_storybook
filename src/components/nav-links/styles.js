import styled, { css } from 'styled-components';

export const NavMenu = styled.div`
    ${({theme})=>css`
        display: flex;
        flex-flow: row wrap;

        @media ${theme.media.tablet}{
            flex-flow: column wrap;
            align-content: center;
        }
    `}
`;