import { Base } from '.';
import mock from '../../components/nav-links/mock';
import { GridContent } from '../../components/grid-content/index';
import GridMock from '../../components/grid-content/mock'
import { GridImage } from '../../components/grid-image';
import  imageMock from '../../components/grid-image/mock';

export const childrenMock = {
    children:(
        <div>
            <GridContent {...GridMock} />
            <GridContent {...GridMock} background />
            <GridContent {...GridMock} />
            <GridContent {...GridMock} background/>
            <GridContent {...GridMock} />
            <GridImage {...imageMock} background/>
        </div>
    ), 
    links:mock,
    logoLink: './assets/images/logo.png',
    footerHTML:'Todos os direitos reservados <a href="https://google.com" target="_blank">Alexandre Fernandes</a>',
}

export default {
    title: 'Base',
    component: Base,
    args:{
        childrenMock,
    },
}
export const Template = (args) => {
    return(
        <div>
             <Base {...args} />
        </div>
    )
}