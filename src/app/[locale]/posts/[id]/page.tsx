import { notFound } from "next/navigation";
import Image from "next/image";
import type { PageType } from "@/types/types";
import { getPostById } from "@/api/posts/get-post-by-id";



const Page: PageType = async ({ params }) =>  {
  const { id } = await params;

  if (!id) return notFound();

  const postData = await getPostById(+id);

  return (
    <div className="container">
      <article className="inner-article">
        <h1 className="title">{postData.title }</h1>
        <Image
          src={postData.main_photo}
          alt={postData.title}
          width={800}
          height={400}
          className="mb-4"
        />
        <p>{postData.content }</p>
      </article>
    </div>
  );
}

export default Page;