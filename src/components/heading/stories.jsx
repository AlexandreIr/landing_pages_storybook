import { Heading } from ".";

export default {
    title:'Heading',
    component: <Heading/>,
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


