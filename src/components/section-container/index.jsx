import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export const SectionContainer = ({children}) =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.Container>
                {children}
            </Styled.Container>
        </ThemeProvider>
    )
};

SectionContainer.propTypes={
    children: P.node.isRequired,
}