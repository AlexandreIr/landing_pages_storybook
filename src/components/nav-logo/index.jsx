import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from '../heading';
import { Img } from 'storybook/internal/components';

export const LogoNav = ({text,srcImage='',link}) =>{
    return(
        <ThemeProvider theme={theme}>
            <Heading>
                <Styled.Container href={link}>
                    {!!srcImage && <Img src={srcImage} alt={text}/>}
                    {!srcImage && text}
                </Styled.Container>
            </Heading>
                
        </ThemeProvider>
    )
};

LogoNav.propTypes={
    text:P.string.isRequired,
    srcImage:P.string,
    link:P.string.isRequired,
}