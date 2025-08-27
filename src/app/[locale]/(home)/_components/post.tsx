import { Routers } from "@/configs/router.config";
import { Link } from "@/i18n/navigation";
import { Time } from "@/lib/utils";
import type { Post as PostType } from "@/types/post.type";
import { Facebook, FacebookIcon, Twitter } from "lucide-react";
import { getLocale } from "next-intl/server";
import Image from "next/image";

export const Post = async ({ postData }: Props) => {
  const locale = await getLocale();
  return (
    <article className="section-article">
      <div className="article__title">
        <h2 className="title">{postData.title[locale]}</h2>
        <div className="article__info">
          <h3 className="info">
            {Time().format("MMMM DD, YYYY")}
            {/* {Time().format("MMMM DD, YYYY")} — {postData.comments.length}{" "} */}
            {/* comments */}
          </h3>
        </div>
        <div className="article__img">
          <Image
            src={postData.main_photo}
            alt={postData.title[locale]}
            width={600}
            height={400}
          />
        </div>
        <div className="article__text">
          <div
            dangerouslySetInnerHTML={{
              __html: postData.content[locale],
            }}
          // dangerouslySetInnerHTML={{
          //   __html: postData.content[locale],
          // }}
          >

          </div>
        </div>
        <footer className="article__footer">
          <Link
            href={Routers.postDetails(postData.id)}
            className="button button--rounded"
          >
            Read More
          </Link>
          <div className="article__social">
            {[Facebook, Twitter, FacebookIcon].map((Platform, index) => (
              <Link key={index} className="article__social__items" href="#">
                <Platform size={40} />
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </article>
  );
}

interface Props {
  postData: PostType;
}