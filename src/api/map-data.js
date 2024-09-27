export const MapData = (data=[{}]) =>{
    return data.map(d=>{
        const {footer_text = '', slug='', title='', sections=[], menu={}} = d

        return {
            html:footer_text,
            slug,
            title,
            sections,
            menu,
        };
    });
};