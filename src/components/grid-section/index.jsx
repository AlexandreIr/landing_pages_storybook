import P, { shape } from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../styles/theme';
import { SectionBackgroud } from '../section-background';
import { Heading } from '../heading';
import { Text } from '../text';

export const GridSection = ({title, description, grid=[], background=false}) =>{
    return(
        <ThemeProvider theme={theme}>
            <SectionBackgroud background={background}>
                <Styled.Container>
                    <Heading upperCase size='huge'>{title}</Heading>
                    <Text>{description}</Text>
                    <Styled.Grid>{grid.map(g=>(
                        <Styled.GridElement key={g.title}>
                            <Heading size='normal'>{g.title}</Heading>
                            <Text>{g.description}</Text>
                        </Styled.GridElement>
                    ))}</Styled.Grid>
                </Styled.Container>
            </SectionBackgroud>
        </ThemeProvider>
    )
};

GridSection.propTypes={
    title: P.string.isRequired,
    description: P.string.isRequired,
    background: P.bool,
    grid:P.arrayOf(
        shape({
            title: P.string.isRequired,
            description: P.string.isRequired,
        })
    ).isRequired,
}