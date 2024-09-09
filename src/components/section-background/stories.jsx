import { SectionBackgroud } from '.';
import { SectionContainer } from '../section-container';

export default {
    title: 'SectionBackgroud',
    component: SectionBackgroud,
    args:{
        children:(
            <SectionContainer>
                <h1>Olá mundo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Unde blanditiis eos exercitationem, cupiditate expedita vel!
                    Explicabo, ab placeat! Eaque nisi officiis vitae quibusdam 
                    quidem aliquid veniam pariatur quis tenetur magni?</p>
            </SectionContainer>
        ),
        background:false,
    },
    argTypes:{
        children:{type:''},
        background:{type:'boolean'},
},
}
export const Template = (args) => {
    return(
        <div>
            <SectionBackgroud {...args} />
        </div>
    )
}