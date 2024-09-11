import { GridContent } from '.';

export default {
    title: 'GridContent',
    component: GridContent,
    args:{
        children:'Olá mundo',
    },
    argTypes:{
        children:{type:'string'},
    },
}
export const Template = (args) => {
    return(
        <div>
             <GridContent {...args} />
        </div>
    )
}