/* eslint-disable react/prop-types */
import P from 'prop-types';

import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme"
import * as Styled from './styles';

export const Text = ({children}) =>{
    return (
        <ThemeProvider theme={theme}>
            <Styled.TextComp dangerouslySetInnerHTML={{__html:children}}/>
        </ThemeProvider>
    )
}

Text.PropTypes = {
    children: P.node.isRequired,
}