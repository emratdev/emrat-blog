import type { Name } from "@/types/name.type";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import PostImage1 from "@public/img/small-thumbs/01.jpg";

export const popularsData: Popular[] = [
  {
    id: 1,
    title: {
      en: "Sample popular post 1",
      ru: "Пример популярного поста 1",
    },
    created_at: new Date("2019-12-26"),
    image: PostImage1,
  },
] as const;


interface Popular {
    id: number;
    title: Name;
    created_at: Date;
    image: string | StaticImport
}