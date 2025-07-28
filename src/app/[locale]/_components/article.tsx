// components/Article.tsx
import { Routers } from "@/configs/url.config";
import { Link } from "@/i18n/navigation";
import { Time } from "@/lib/utils";
import type { Post } from "@/types/post.type";
import { Facebook, FacebookIcon, Twitter } from "lucide-react";
import Image from "next/image";

export const Article = ({
  comments,
  id,
  main_photo,
  short_description,
  title,
  content,
}:Props) => {
  return (
    <article className="section-article">
      <div className="article__title">
        <h2 className="title">{title}</h2>
        <div className="article__info">
          <h3 className="info">
            {Time().format("MMMM DD, YYYY")} — {comments.length} comments
          </h3>
        </div>
        <div className="article__img">
          <Image src={main_photo} alt={title} width={600} height={400} />
        </div>
        <div className="article__text">
          <p>{short_description}</p>
        </div>
        <footer className="article__footer">
          <Link
            href={Routers.postDetails(id)}
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
};

interface Props extends Omit<Post, "content"> {}