import Insta1 from "@public/img/instagram/insta-01.jpg";
import Insta2 from "@public/img/instagram/insta-02.jpg";
import Insta3 from "@public/img/instagram/insta-03.jpg";
import Insta4 from "@public/img/instagram/insta-04.jpg";
import Insta5 from "@public/img/instagram/insta-05.jpg";
import Insta6 from "@public/img/instagram/insta-06.jpg";
import Insta7 from "@public/img/instagram/insta-07.jpg";
import Insta8 from "@public/img/instagram/insta-08.jpg";
import Insta9 from "@public/img/instagram/insta-09.jpg";
import Insta10 from "@public/img/instagram/insta-10.jpg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";





export const instagramData:Instagram[] = [
    {
        id: 1,
        img: Insta1,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 2,
        img: Insta2,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 3,
        img: Insta3,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 4,
        img: Insta4,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 5,
        img: Insta5,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 6,
        img: Insta6,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 7,
        img: Insta7,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 8,
        img: Insta8,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 9,
        img: Insta9,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
    {
        id: 10,
        img: Insta10,
        link: 'https://www.instagram.com/p/Bu3K7n4H3d5/',
    },
] as const;


interface Instagram {
    id: number;
    img: string | StaticImport
    link: URL | string;
}