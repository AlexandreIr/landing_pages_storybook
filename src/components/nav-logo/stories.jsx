import { LogoNav } from '.';

export default {
    title: 'LogoNav',
    component: LogoNav,
    args:{
        text:'Logo',
        srcImage:'./assets/images/logo.png',
        link:'https://www.google.com'
    },
    argTypes:{
        children:{type:'string'},
        srcImage:{type:'string'},
        link:{type:'string'}
},
}
export const Template = (args) => {
    return(
        <div>
            <LogoNav {...args} />
        </div>
    )
}