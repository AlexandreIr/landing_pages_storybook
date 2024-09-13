import P, { shape } from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { SectionBackgroud } from '../section-background';

export const GridImage = ({grid=[], background = false, title, description}) =>{
    return(
        <ThemeProvider theme={theme}>
            <SectionBackgroud background={background}>
                <Styled.Container>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                    <Styled.GridImages>
                        {grid.map(gr=>(
                            <Styled.GridElement key={gr.srcImg}>
                                <Styled.Image  src={gr.srcImg} alt={gr.altText}/>
                            </Styled.GridElement>
                        ))}
                    </Styled.GridImages>
                </Styled.Container>
            </SectionBackgroud>
        </ThemeProvider>
    )
};

GridImage.propTypes={
    grid: P.arrayOf(shape(
        {
            altText:P.string.isRequired,
            srcImg:P.string.isRequired
        }
    )),
    background:P.bool,
    title:P.string.isRequired,
    description:P.string.isRequired,
}