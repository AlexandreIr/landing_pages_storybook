import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { ArrowUpward } from '@styled-icons/material-outlined';
import { theme } from '../../styles/theme';

export const GoToTop = () =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.Container href="#" aria-label="go to top" title="go to top">
                <ArrowUpward/>
            </Styled.Container>
        </ThemeProvider>
    )
};

GoToTop.propTypes={
    children: P.node.isRequired,
}