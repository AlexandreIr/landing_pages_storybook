import styled, { css } from "styled-components";

const titleSize = {
    xsmall: (theme) => css`font-size: ${theme.font.size.xsmall}`,
    small: (theme) => css`font-size: ${theme.font.size.small}`,
    normal: (theme) => css`font-size: ${theme.font.size.normal}`,
    large: (theme) => css`font-size: ${theme.font.size.large}`,
    xlarge: (theme) => css`font-size: ${theme.font.size.xlarge}`,
    xxlarge: (theme) => css`font-size: ${theme.font.size.xxlarge}`,
    huge: (theme) => css`font-size: ${theme.font.size.huge};
        ${mediaFonts(theme)}
    `,
}

const mediaFonts = (theme) => css`
    @media ${theme.media.tablet} {
        font-size: ${theme.font.size.normal};
        background-color: ${theme.colors.white};
    }
`;

const titleCase = (upperCase) => css`
    text-transform: ${upperCase?'uppercase':'none'};
`

const titleFont = {
    default:(theme)=>css`font-family: ${theme.font.family.default}`,
    secondary:(theme)=>css`font-family: ${theme.font.family.secondary}`,
    third:(theme)=>css`font-family:${theme.font.family.third}`,
    fourth:(theme)=>css`font-family:${theme.font.family.fourth}`
}

export const title = styled.h1`
    ${({theme, size, upperCase, fontfamily})=> css`
        ${titleFont[fontfamily](theme)};
        ${titleSize[size](theme)}; 
        ${titleCase(upperCase)};
    `}
`