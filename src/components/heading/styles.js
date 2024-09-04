import styled, { css } from "styled-components";

const titleSize = {
    xsmall: (theme) => css`font-size: ${theme.font.size.xsmall}`,
    small: (theme) => css`font-size: ${theme.font.size.small}`,
    normal: (theme) => css`font-size: ${theme.font.size.normal}`,
    large: (theme) => css`font-size: ${theme.font.size.large}`,
    xlarge: (theme) => css`font-size: ${theme.font.size.xlarge}`,
    xxlarge: (theme) => css`font-size: ${theme.font.size.xxlarge}`
}

const titleCase = (upperCase) => css`
    text-transform: ${upperCase?'uppercase':'none'};
`

const titleColor = {
    primary : (theme) => css`color: ${theme.colors.primary}`,
    secondary : (theme) => css`color: ${theme.colors.secondary}`,
    white : (theme) => css`color: ${theme.colors.white}`,
    black : (theme) => css`color: ${theme.colors.black}`,
}
const titleBgColor = {
    primary:(theme)=>css`background-color: ${theme.colors.primary}`,
    secondary:(theme)=>css`background-color: ${theme.colors.secondary}`,
    white:(theme)=>css`background-color: ${theme.colors.white}`,
    black:(theme)=>css`background-color: ${theme.colors.black}`,
}
const titleFont = {
    default:(theme)=>css`font-family: ${theme.font.family.default}`,
    secondary:(theme)=>css`font-family: ${theme.font.family.secondary}`,
    third:(theme)=>css`font-family:${theme.font.family.third}`,
    fourth:(theme)=>css`font-family:${theme.font.family.fourth}`
}

export const title = styled.h1`
    ${({theme, size, upperCase, color, bgcolor, fontfamily})=> css`
        ${titleFont[fontfamily](theme)};
        ${titleBgColor[bgcolor](theme)};
        ${titleSize[size](theme)}; 
        ${titleCase(upperCase)};
        ${titleColor[color](theme)};
    `}
`