import { Text } from ".";

export default {
    title:'text',
    component: Text,
    args:{
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Cum voluptate atque at, totam sapiente hic consectetur,
        eum ipsam nobis, deserunt molestias tempora maiores mollitia 
        molestiae rem facilis nemo dolore dolorem?`
    },
}

export const Template = (args) => <Text {...args}/>;
