import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export const SectionBackgroud = ({children, background = false}) =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.Container background={background}>
                {children}
            </Styled.Container>
        </ThemeProvider>
    )
};

SectionBackgroud.propTypes={
    children: P.node.isRequired,
    background: P.bool,
}