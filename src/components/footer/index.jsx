import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Text } from '../text';

export const Footer = ({txt}) =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.Container>
                <Text>{txt}</Text> 
            </Styled.Container>
        </ThemeProvider>
    )
};

Footer.propTypes={
    txt: P.string.isRequired,
}