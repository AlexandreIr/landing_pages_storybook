import styled, { css } from 'styled-components';
import {title as TitleContainer} from '../heading/styles';
import {TextComp} from '../text/styles';

export const Container = styled.div`
    ${({theme})=>css`
        margin: ${theme.spacing.large} 0;

        @media ${theme.media.smallPhone}{
            margin: ${theme.spacing.normal} 0;
            overflow-x: hidden;
        }
    `}
`;
export const Grid = styled.div`
    ${({theme})=>css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacing.normal};
        counter-reset: grid-counter;
    `}
`;

export const GridElement = styled.div`
    ${({theme})=>css`
        padding: ${theme.spacing.small};

        ${TitleContainer} {
            position: relative;
            left: 4rem;
        }

        ${TitleContainer}::before{
            counter-increment: grid-counter;
            content: counter(grid-counter);
            position: absolute;
            font-size: ${theme.font.size.xxlarge};
            top: -1rem;
            left: -4rem;
            transform: rotate(5deg);
        }

        @media ${theme.media.smallPhone}{
            ${TextComp}{
                font-size: 1.4rem;
            } 
        }
    `}
`;