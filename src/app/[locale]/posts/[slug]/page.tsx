import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

export default function InnerPostPage({ params }: Props) {
  const { slug } = params;

  if (!slug) return notFound();

  return (
    <div className="container">
      <article className="inner-article">
        <h1 className="title">Maqola: {slug.replace(/-/g, " ")}</h1>
        <Image
          src="/img/full-post-img/full-post-preview.jpg"
          alt="Maqola rasmi"
          width={800}
          height={400}
          className="mb-4"
        />
        <p>Bu maqola sahifasi: {slug}</p>
      </article>
    </div>
  );
}
