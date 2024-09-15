import P from 'prop-types';

import * as Styled from './styles';
import { ArrowToTop } from '@styled-icons/boxicons-regular/ArrowToTop';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export const GoToTop = () =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.Container href="#">
                <ArrowToTop/>
            </Styled.Container>
        </ThemeProvider>
    )
};

GoToTop.propTypes={
    children: P.node.isRequired,
}