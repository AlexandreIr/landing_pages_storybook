import { describe, expect, it } from "vitest";
import { mapMenu } from "./map-menu";

describe('map-menu',()=>{
    it('should receive a predefined data', ()=>{
        const menuData = mapMenu();
        expect(menuData.newTab).toBe(false);
        expect(menuData.text).toBe('');
        expect(menuData.link).toBe('');
        expect(menuData.Logo).toBe(undefined);
        expect(menuData.links).toEqual([]);
    });

    it('should receive data', ()=>{
        const menu = mapMenu({
            open_in_new_tab: false,
            _id: "602fdf30540c00269e0561ae",
            logo_text: "Landing Page",
            logo_link: "#home",
            menu: [
            {
                open_in_new_tab: false,
                _id: "602fdf30540c00269e0561af",
                link_text: "intro",
                url: "#intro",
                __v: 0,
                id: "602fdf30540c00269e0561af"
            },
            {
                open_in_new_tab: false,
                _id: "602fdf30540c00269e0561b0",
                link_text: "grid-one",
                url: "#grid-one",
                __v: 0,
                id: "602fdf30540c00269e0561b0"
            },
            {
                open_in_new_tab: false,
                _id: "602fdf30540c00269e0561b1",
                url: "#gallery",
                link_text: "gallery",
                __v: 0,
                id: "602fdf30540c00269e0561b1"
            },
            ],
        Logo:{
            url:"https://res.cloudinary.com/dlizakp2a/image/upload/v1613748744/landing_page_2_f7da938739.svg",
        }
        })
        expect(menu.newTab).toBe(false);
        expect(menu.text).toBe('Landing Page');
        expect(menu.srcImg).toBe("https://res.cloudinary.com/dlizakp2a/image/upload/v1613748744/landing_page_2_f7da938739.svg");
        expect(menu.link).toBe("#home");
        expect(menu.links[0].open_in_new_tab).toBe(false);


        });
});