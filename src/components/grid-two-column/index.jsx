import P from 'prop-types';

import * as Styled from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { SectionBackgroud } from '../section-background';
import { Heading } from '../heading';
import { Text } from '../text';

export const GridTwoColumn = ({title, text, srcImage, bg = false}) =>{
    return(
        <ThemeProvider theme={theme}>
            <SectionBackgroud background={bg}>
                <Styled.Container background={bg}>
                    <Styled.TextContainer>
                        <Heading upperCase>{title}</Heading>
                        <Text>{text}</Text>
                    </Styled.TextContainer>
                    <Styled.ImageContainer>
                        <Styled.Image src={srcImage} alt={title}/>
                    </Styled.ImageContainer>
                </Styled.Container>
            </SectionBackgroud>
        </ThemeProvider>
    )
};

GridTwoColumn.propTypes={
    title: P.string.isRequired,
    text: P.string.isRequired,
    srcImage: P.string.isRequired,
    bg: P.bool,
}