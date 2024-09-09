import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../styles/theme';
import { SectionContainer } from '../section-container';
import { LogoNav } from '../nav-logo';
import { NavLinks } from '../nav-links';

export const Menu = ({links = [], logoData}) =>{
    return(
        <ThemeProvider theme={theme}>
            <Styled.Container>
                <SectionContainer>
                    <Styled.MenuContainer>
                        <LogoNav {...logoData}/>
                        <NavLinks links={links}/>
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </ThemeProvider>
    )
};

Menu.propTypes={
    ...NavLinks.propTypes,
    logoData: P.shape(LogoNav.propTypes).isRequired,
}