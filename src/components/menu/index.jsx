import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../styles/theme';
import { SectionContainer } from '../section-container';
import { LogoNav } from '../nav-logo';
import { NavLinks } from '../nav-links';
import { Menu as MenuIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { useState } from 'react';

export const Menu = ({links = [], logoData}) =>{
    const [visible, setVisible] = useState(false);

    const visibleHandle = () =>{
        setVisible(s=>!s);
    };


    return(
        <ThemeProvider theme={theme}>
            <Styled.Button 
            onClick={visibleHandle} 
            aria-label="Open/Close menu">
                {visible ? <CloseIcon aria-label="Close Menu" /> :<MenuIcon aria-label="Open Menu"/>}
            </Styled.Button>
            <Styled.Container visible={visible} onClick={visibleHandle}>
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