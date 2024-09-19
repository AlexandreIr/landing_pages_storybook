import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';
import { GoToTop } from '../../components/gototop';
import { LogoNav } from '../../components/nav-logo';


export const Base = ({links=[],logoData, footerHTML,children}) =>{
    return(
        <ThemeProvider theme={theme}>
            <>
            <Menu links={links} logoData={logoData}/>
                <Styled.Container>
                    {children}
                    <Footer txt={footerHTML}/>
                </Styled.Container>
                <GoToTop/>
            </>
        </ThemeProvider>
    )
};

Base.propTypes={
    ...Menu.propTypes,
    ...LogoNav.propTypes,
    footerHTML: P.node.isRequired,
    children: P.node.isRequired,
}