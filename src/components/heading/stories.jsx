import { Heading } from ".";

export default {
    title:'Heading',
    component: Heading,
    args: {
        children:'Clique aqui',
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
    size:'normal',
    upperCase:false,
    color:'black',
    fontfamily:'default',
}