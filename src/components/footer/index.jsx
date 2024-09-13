import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Text } from '../text';

export const Footer = ({children}) =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.Container>
                <Text>{children}</Text> 
            </Styled.Container>
        </ThemeProvider>
    )
};

Footer.propTypes={
    children: P.node.isRequired,
}