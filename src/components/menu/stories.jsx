import { Menu } from '.';
import links from '../nav-links/mock';

export default {
    title: 'Menu',
    component: Menu,
    args:{
        links: links,
        logoData:{
            text:'logo',
            srcImage:'./assets/images/logo.png',
            link:'https://google.com',
        },
    },
}
export const Template = (args) => {
    return(
        <div>
            <Menu {...args} />
        </div>
    )
}