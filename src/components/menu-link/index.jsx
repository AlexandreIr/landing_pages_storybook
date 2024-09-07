import P from 'prop-types';
import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export const MenuLink = ({children, link, newTab = false}) =>{
    const target = newTab ? '_blank' : 'self';
    return(
        <ThemeProvider theme={theme}>
            <Styled.Menu href={link} target={target}>
                {children}
            </Styled.Menu>
        </ThemeProvider>
    )
};
MenuLink.propTypes={
    children: P.node.isRequired,
    link:P.string.isRequired,
    newTab:P.bool
}