import { getPosts } from "@/api/posts/get-posts";
import Image from "next/image";
import { Pagination } from "./pagination";
import { Post } from "./post";
import { getLocale } from "next-intl/server";
import { Instagram } from "./instagram";
import { PopularPosts } from "./popular-posts";

export const Content = async ({ page }: { page: number }) => {
  const locale = await getLocale();

  const postData = await getPosts({ page });
  return (
    <div className="container">
      <main className="section-main">
        <div className="main__left">
          {postData.map((post) => (
            <Post key={post.id} postData={post} />
          ))}

          <Pagination total={postData.length} />
        </div>

        <div className="main__right">
          <div className="recent">
            <h3 className="title">Recent posts</h3>
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="recent__desc" key={i}>
                <div className="recent__desc__img">
                  <Image
                    src={`/img/small-thumbs/0${i}.jpg`}
                    alt="Recent post"
                    width={100}
                    height={70}
                  />
                </div>
                <h4 className="title">Sample recent post {i}</h4>
                <div className="recent__desc__info">
                  December 26, 2019 — 5 comments
                </div>
              </div>
            ))}
          </div>

         <PopularPosts/>

          <Instagram/>
        </div>
      </main>
    </div>
  );
}
