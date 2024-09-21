import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading } from '../heading';
import { SectionBackgroud } from '../section-background';
import { Text } from '../text';

export const GridContent = ({title, html, background=false}) =>{
    return(
        <ThemeProvider theme={theme}>
            <SectionBackgroud background={background}>
                <Styled.Container>
                        <Heading upperCase as='h2'>{title}</Heading>
                        <Styled.Html>
                            <Text>{html}</Text>
                        </Styled.Html>
                </Styled.Container>
            </SectionBackgroud>
        </ThemeProvider>
    )
};

GridContent.propTypes={
    title: P.string.isRequired,
    html:P.string.isRequired,
    background:P.bool,
}