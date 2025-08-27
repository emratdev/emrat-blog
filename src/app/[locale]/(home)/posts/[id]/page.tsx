import Image from "next/image";
import type { PageType } from "@/types/types";
import { getPostById } from "@/api/posts/get-post-by-id";
import { CommentForm } from "../_components/comment-form";
import { Routers } from "@/configs/router.config";
import { redirect } from "@/i18n/navigation";
import { getComments } from "@/api/comments/get-comments.api";
import { UserComment } from "../_components/user-comment";
import { setRequestLocale } from "next-intl/server";



const Page: PageType = async ({ params }) => {
  const { id, locale } = await params;
  setRequestLocale(locale);
  if (!id) {
    return redirect({
      locale,
      href: Routers.auth.login,
    })
  }

  // const postData = await getPostById(Number(id));



  const [postData, commentData] = await Promise.all([
    getPostById(Number(id)), getComments({
      postId: Number(id)
    })
  ]);

  return (
    <div className="container">
      <article className="inner-article">
        <h1 className="title">{postData.title[locale]}</h1>
        <Image
          src={postData.main_photo}
          alt={postData.title[locale]}
          width={800}
          height={400}
          className="mb-4"
        />
        <p>{postData.content[locale]}</p>
      </article>

      <CommentForm />

      <article className="inner-article other-comment">
        <div className="other-comment__title">
          <h3 className="title">Other comments:</h3>
        </div>
        <div className="other-comment__comments">
          {/* {
            commentData.map((comment) => (
              <UserComment key={comment.id} userId={comment.userId} commentId={comment.id} />
            ))
          } */}
        </div>
      </article>
    </div>
  );
}

export default Page;