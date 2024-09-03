/* eslint-disable react/prop-types */
import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';


export const Heading = ({children}) =>{
    return (
    <ThemeProvider theme={theme}>
        <Styled.title>{children}</Styled.title>
    </ThemeProvider>
    )
}

Heading.PropTypes = {
    children:P.node.isRequired,
};