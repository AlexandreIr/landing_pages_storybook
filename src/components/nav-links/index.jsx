import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MenuLink } from '../menu-link';

export const NavLinks = ({links=[]}) =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.NavMenu>
                {links.map(link=>(
                    <MenuLink key={link.link} {...link}/>
                ))}
            </Styled.NavMenu>
        </ThemeProvider>
    )
};

NavLinks.propTypes={
    links: P.arrayOf(
        P.shape({
            children:P.string.isRequired,
            link: P.string.isRequired,
            newTab:P.bool,
        }),
    ).isRequired,
};