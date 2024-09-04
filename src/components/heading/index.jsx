/* eslint-disable react/prop-types */
import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';


export const Heading = ({children,
    as = 'h1', 
    size = 'normal', 
    upperCase = false, 
    color = 'black', 
    bgColor = 'white',
    fontFamily = 'default'}) =>{
    return (
    <ThemeProvider theme={theme}>
        <Styled.title as={as} 
        size= {size} 
        upperCase={upperCase} 
        color={color}
        bgColor={bgColor}
        fontFamily={fontFamily}>
            {children}
        </Styled.title>
    </ThemeProvider>
    )
}

Heading.propTypes = {
    children:P.node.isRequired,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    size: P.oneOf(['xsmall', 'small', 'normal', 'large', 'xlarge', 'xxlarge']).isRequired,
    upperCase: P.bool.isRequired,
    color: P.oneOf(['primary', 'secondary', 'white', 'black']).isRequired,
    bgColor: P.oneOf(['primary', 'secondary', 'white', 'black']).isRequired,
    fontFamily: P.oneOf(['default', 'secondary']).isRequired,
};