import styled, { css } from 'styled-components';
import {title} from '../heading/styles';

export const Container = styled.div`
    ${({theme})=>css`
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: ${theme.spacing.large};

        @media ${theme.media.tablet}{
            grid-template-columns: 1fr;
            text-align: center;
        }
        ${title}{
            margin-bottom: ${theme.spacing.xlarge};
        }
    `}
`;

export const TextContainer = styled.div`
    ${({theme})=>css`
        font-size: ${theme.spacing.large};
    `}
`;


export const ImageContainer = styled.div`
    ${()=>css`
    `}
`;

export const Image = styled.img`
    ${({theme})=>css`
        max-width: 35rem;

        @media ${theme.media.largePhone}{
            width: 23rem;
        }

        @media ${theme.media.smallPhone}{
            width: 17rem;
        }
    `}
`;