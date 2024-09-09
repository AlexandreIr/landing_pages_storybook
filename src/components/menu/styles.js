import styled, { css } from 'styled-components';
import {Container as SectionContainer} from '../section-container/styles';
import {title as Heading} from '../heading/styles';

export const Container = styled.h1`
    ${({theme})=>css`
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 5;
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
        border-bottom: ${theme.colors.mediumGrey};

        & ${SectionContainer} {
            padding-top: 0;
            padding-bottom: 0;
        }
        & ${Heading} {
            margin: 0;
            margin-bottom: 0;
        }
        @media ${theme.media.tablet} {
            height: 100vh;

            & ${SectionContainer} {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
                overflow-y: auto;
            }
            & ${Heading} {
                padding-bottom: ${theme.spacing.large};
                display: flex;
                justify-content: center;
            }
        }
    `}
`;

export const MenuContainer = styled.div`
    ${({theme})=>css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        @media ${theme.media.tablet} {
            display: block;
            text-align: center;
            padding: ${theme.spacing.xxlarge} 0;
        }
    `}

`;

export const Button = styled.div`
    ${({theme})=>css`

    `}
`;