import { Footer } from '.';

export default {
    title: 'Footer',
    component: Footer,
    args:{
        children:`<p>Todos os direitos reservados a <a href="#">Alexandre Fernandes</a></p>`,
    },
    argTypes:{
        children:{type:'string'},
    },
}
export const Template = (args) => {
    return(
        <div>
            <Footer {...args} />
        </div>
    )
}