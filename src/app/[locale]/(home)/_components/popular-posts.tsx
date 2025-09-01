import { popularsData } from "@/defaults/populars.data";
import { Time } from "@/lib/utils";
import { getLocale } from "next-intl/server";
import Image from "next/image";

export const PopularPosts = async () => {
    const locale = await getLocale();
    return (
      <div className="space-y-10">
        <h3 className="border py-5 text-center text-2xl font-bold">
          Popular posts
        </h3>
        {popularsData.map((post) => (
          <div key={post.id} className="space-y-10 text-center">
                <div className="overflow-hidden rounded-full w-[85px] h-[85px] mx-auto">
                    <Image 
                        className="w-full h-full object-cover block"
                        src={post.image}
                        alt={post.title[locale]}
                       />
                </div>

                <h4>{post.title[locale]}</h4>

                <time dateTime={Time(post.created_at).format("YYYY-MM-DD")}>
                    {Time(post.created_at).format("MMMM DD, YYYY")}
                </time>
          </div>
        ))}
      </div>
    );
}