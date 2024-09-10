import { GridTwoColumn } from '.';

export default {
    title: 'GridTwoColumn',
    component: GridTwoColumn,
    args:{
        title:'Lorem Title',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Assumenda amet minima nisi nesciunt aperiam! 
        Labore veritatis voluptate possimus architecto aspernatur modi,
        ratione illum amet asperiores corporis vitae, delectus saepe neque!`,
        srcImage:'./assets/images/dev.png',
    },
    argTypes:{
        title:{type:'string'},
        text:{type:'string'},
        srcImage:{type:'string'},
        background:{type:'boolean'}
    },
}
export const Template = (args) => {
    return(
        <div>
             <GridTwoColumn {...args} />
        </div>
    )
}