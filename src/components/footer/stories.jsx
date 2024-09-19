import { Footer } from '.';

export default {
    title: 'Footer',
    component: Footer,
    args:{
        txt:`<p>Todos os direitos reservados a <a href="#">Alexandre Fernandes</a></p>`,
    },
    argTypes:{
        txt:{type:'string'},
    },
}
export const Template = (args) => {
    return(
        <div>
            <Footer {...args} />
        </div>
    )
}