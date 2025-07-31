import { getPosts } from "@/api/posts/get-posts";
import Image from "next/image";
import Link from "next/link";
import { Article } from "./article";
import { Pagination } from "./pagination";

export const Content = async ({page}:{page: number}) => {
   
  const postData = await getPosts({page });
  return (
    <div className="container">
      <main className="section-main">
        <div className="main__left">

          {
            postData.map(post => <Article key={post.id} {...post}/> )
          }

          <Pagination total={postData.length }/>
       

          
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

          <div className="widget">
            <h3 className="title">Popular posts</h3>
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="widget__desc" key={i}>
                <div className="widget__desc__img">
                  <Image
                    src={`/img/small-thumbs/0${i}.jpg`}
                    alt="Popular post"
                    width={100}
                    height={70}
                  />
                </div>
                <h4 className="title">Sample popular post {i}</h4>
                <div className="widget__desc__info">
                  December 26, 2019 — 5 comments
                </div>
              </div>
            ))}
          </div>

          <div className="widget">
            <h3 className="title">Instagram</h3>
            <div className="widget__instagram-photo">
              {[...Array(10)].map((_, i) => (
                <Link className="widget__item-img" href="#" key={i}>
                  <Image
                    src={`/img/instagram/insta-0${i + 1}.jpg`}
                    alt={`Instagram ${i + 1}`}
                    width={80}
                    height={80}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
