import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';


export const Heading = ({children,
    as = 'h1', 
    size = 'normal', 
    upperCase = false, 
    color = 'black', 
    bgcolor = 'white',
    fontfamily = 'default'}) =>{
    return (
    <ThemeProvider theme={theme}>
        <Styled.title as={as} 
        size= {size} 
        upperCase={upperCase} 
        color={color}
        bgcolor={bgcolor}
        fontfamily={fontfamily}>
            {children}
        </Styled.title>
    </ThemeProvider>
    )
}

Heading.propTypes = {
    children:P.node.isRequired,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    size: P.oneOf(['xsmall', 'small', 'normal', 'large', 'xlarge', 'xxlarge', 'huge']),
    upperCase: P.bool,
    color: P.oneOf(['primary', 'secondary', 'white', 'black']),
    bgcolor: P.oneOf(['primary', 'secondary', 'white', 'black']),
    fontfamily: P.oneOf(['default', 'secondary', 'third', 'fourth']),
};