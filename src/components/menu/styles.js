import styled, { css } from 'styled-components';
import {Container as SectionContainer} from '../section-container/styles';
import {title as Heading} from '../heading/styles';

// eslint-disable-next-line no-unused-vars
const menuVisibility = (theme)=> css`
    visibility: visible;
    opacity: 1;
`;

export const Container = styled.h1`
    ${({theme, visible})=>css`
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 5;
        max-height:10rem;
        color: ${theme.colors.black};
        border-bottom: ${theme.colors.mediumGrey};
        transition: all 500ms ease-in-out;
        height: 5rem;

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
            visibility: hidden;
            opacity: 0;
            ${visible && menuVisibility(theme)};

            & ${SectionContainer} {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                align-items: center;
                overflow-y: auto;
            }
            & ${Heading} {
                padding-bottom: ${theme.spacing.large};
                display: flex;
                justify-content: space-between;
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
        z-index: 5;
        position: fixed;
        top: 2rem;
        right: 2rem;
        width: 4rem;
        height: 4rem;
        display: none;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        > svg {
            width: 2.5rem;
            height: 2.5rem;
        }

        @media ${theme.media.tablet} {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `}
`;