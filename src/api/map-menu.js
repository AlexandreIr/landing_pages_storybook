export const mapMenu = (menu={}) =>{
    const {
        open_in_a_new_tab: newTab=false,
        logo_text: text ='',
        logo_link:link='',
        Logo:{url: srcImg = ''}='',
        menu:links=[],
    } = menu;

    return {
        newTab,
        text,
        link,
        srcImg,
        links,
    }
}