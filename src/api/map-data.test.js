import { describe, expect, it } from "vitest";
import { MapData } from "./map-data";

describe ('data mapping', ()=>{
    it('should map data even if there is no data', ()=>{
        const pageData = MapData()[0];
        expect(pageData.html).toBe('');
        expect(pageData.slug).toBe('');
        expect(pageData.title).toBe('');
    })
    it('should map data when there is data', ()=>{
        const pageData = MapData([
            {
                footer_text:'<p>Olá mundo</p>',
                slug:'slug',
                title:'yes',
            }])[0];
        expect(pageData.html).toBe('<p>Olá mundo</p>');
        expect(pageData.slug).toBe('slug');
        expect(pageData.title).toBe('yes');
    })
})