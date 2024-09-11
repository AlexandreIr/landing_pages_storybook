import P from 'prop-types';

import * as Styled from './styles';

export const GridContent = ({children}) =>{
    return(
        <Styled.Container>
            {children}
        </Styled.Container>
    )
};

GridContent.propTypes={
    children: P.node.isRequired,
}