import Image from "next/image";
import Link from "next/link";

export default function InnerPage() {
  return (
    <div className="container">
      <article className="inner-article">
        <h1 className="title">
          Gastropub ennui keytar, plaid meggings marfa edison bulb pour-over
          austin enamel pin.
        </h1>
        <div className="article__info">
          <h3 className="info">NOVEMBER 28, 2019 — 12 COMMENTS</h3>
        </div>
        <div className="article__img">
          <Image
            src="/img/full-post-img/full-post-preview.jpg"
            alt="post-preview"
            width={800}
            height={400}
          />
        </div>
        <div className="article__text">
          <p>Lorem ipsum dolor amet poke dreamcatcher...</p>
          <p>Copper mug wayfarers swag biodiesel hoodie...</p>
          <p>Freegan glossier whatever banh mi lumbersexual...</p>
          <p>Tumblr wolf whatever single-origin coffee...</p>
          <p>Gastropub scenester trust fund skateboard...</p>
        </div>
      </article>

      <form className="form" action="" method="post">
        <div className="form__title">
          <h3 className="title">Comment it:</h3>
        </div>
        <div className="form__comment">
          <textarea
            className="comment"
            name="comment"
            defaultValue="Flannel bicycle rights chicharrones tacos..."
          />
        </div>
        <div className="form__info">
          <input className="input" type="text" placeholder="Your name" />
          <input className="input" type="text" placeholder="Email" />
          <input className="input" type="text" placeholder="Homepage" />
        </div>
        <button className="button" type="button">
          Comment
        </button>
      </form>

      <article className="inner-article other-comment">
        <div className="other-comment__title">
          <h3 className="title">Other comments:</h3>
        </div>
        <div className="other-comment__comments">
          <div className="comments__items">
            <div className="comments__user">
              <Link className="user__avatar" href="#">
                <Image
                  src="/img/users/user-01.jpg"
                  alt="user-01"
                  width={50}
                  height={50}
                />
              </Link>
              <Link className="user__nike" href="#">
                Nina Ricci
              </Link>
            </div>
            <div className="comments__text">
              <p>Locavore keffiyeh kickstarter fashion axe...</p>
            </div>
          </div>

          <div className="comments__items">
            <div className="comments__user">
              <Link className="user__nike" href="#">
                Joe Campbel
              </Link>
            </div>
            <div className="comments__text">
              <p>Tumblr wolf whatever single-origin coffee...</p>
            </div>
          </div>

          <div className="comments__items">
            <div className="comments__user">
              <Link className="user__nike" href="#">
                Luke Besson
              </Link>
            </div>
            <div className="comments__text">
              <p>Umami typewriter celiac, blue bottle flexitarian...</p>
            </div>
          </div>

          <div className="comments__items">
            <div className="comments__user">
              <Link className="user__avatar" href="#">
                <Image
                  src="/img/users/user-02.jpg"
                  alt="user-02"
                  width={50}
                  height={50}
                />
              </Link>
              <Link className="user__nike" href="#">
                Tim Hendrix
              </Link>
            </div>
            <div className="comments__text">
              <p>Wayfarers try-hard crucifix, neutra paleo yr...</p>
            </div>
          </div>

          <div className="comments__items">
            <div className="comments__user">
              <Link className="user__avatar" href="#">
                <Image
                  src="/img/users/user-03.jpg"
                  alt="user-03"
                  width={50}
                  height={50}
                />
              </Link>
              <Link className="user__nike" href="#">
                Walt Bezos
              </Link>
            </div>
            <div className="comments__text">
              <p>Before they sold out palo santo organic shabby...</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
