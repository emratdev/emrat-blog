import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <div className="container">
      <main className="section-main">
        <div className="main__left">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <article className="section-article" key={i}>
              <div className="article__title">
                <h2 className="title">
                  {/* Replace below with dynamic title */}
                  Sample blog post title {i + 1}
                </h2>
                <div className="article__info">
                  <h3 className="info">December 26, 2019 — 5 comments</h3>
                </div>
                <div className="article__img">
                  <Image
                    src={`/img/posts-preview/img-0${i + 1}.jpg`}
                    alt="Post preview"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="article__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum.
                  </p>
                </div>
                <footer className="article__footer">
                  <Link
                    href={`/posts/maqola-${i + 1}`}
                    className="button button--rounded"
                  >
                     Read More
                  </Link>
                  <div className="article__social">
                    {["whatsapp", "instagram", "twitter", "facebook-f"].map(
                      (platform) => (
                        <Link
                          key={platform}
                          className="article__social__items"
                          href="#"
                        >
                          <Image
                            src={`/img/icons/social/${platform}.svg`}
                            alt={platform}
                            width={24}
                            height={24}
                          />
                        </Link>
                      )
                    )}
                  </div>
                </footer>
              </div>
            </article>
          ))}

          <div className="pagination">
            <button className="pagination__button" aria-label="Previous page" />
            <div className="slider">
              {[1, 2, 3].map((page) => (
                <Link
                  key={page}
                  href="#"
                  className={`slid__article ${page === 1 ? "active" : ""}`}
                >
                  {page}
                </Link>
              ))}
            </div>
            <button className="pagination__button">Older Posts</button>
          </div>
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
