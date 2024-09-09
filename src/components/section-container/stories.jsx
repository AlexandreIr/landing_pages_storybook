import { SectionContainer } from './index';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args:{
        children: (
            <div>
                <h1>Olá mundo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Unde blanditiis eos exercitationem, cupiditate expedita vel!
                    Explicabo, ab placeat! Eaque nisi officiis vitae quibusdam 
                    quidem aliquid veniam pariatur quis tenetur magni?</p>
            </div>
        )
    },
    argTypes:{
        children:{type:''},
},
}
export const Template = (args) => {
    return(
        <div>
            <SectionContainer {...args} />
        </div>
    )
}