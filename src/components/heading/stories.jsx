import { Heading } from ".";

export default {
    title:'Heading',
    component: Heading,
    args: {
        children:'Clique aqui',
    },
    argTypes: {
        children: { type: 'string' },
    },
    parameters:{
        backgrounds:{
            default:'blue',
        }
    },
};

export const Template = (args) => <Heading {...args}/>;

Template.args = {
    as:'h1',
    size:'huge',
    upperCase:false,
    color:'black',
    fontfamily:'default',
}