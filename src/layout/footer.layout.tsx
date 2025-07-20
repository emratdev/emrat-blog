import Image from "next/image";
import Link from "next/link";

export const FooterLayout = () => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="footer__nav">
          <ul className="nav__list">
            <li>
              {" "}
              <Link className="nav__link" href="#">
                Latest Posts
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav__link" href="#">
                Popular Posts
              </Link>
            </li>
          </ul>
          <ul className="nav__list">
            <li>
              {" "}
              <Link className="nav__link" href="#">
                Search
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav__link" href="#">
                Contact Information
              </Link>
            </li>
          </ul>
          <ul className="nav__list">
            <li>
              {" "}
              <Link className="nav__link" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              {" "}
              <Link className="nav__link" href="#">
                Terms of Use
              </Link>
            </li>
          </ul>
          <div className="footer__social">
            <Link className="social__items" href="#">
              {" "}
              <Image
                width={30}
                height={30}
                src="/img/icons/social/instagram.svg"
                alt="instagram"
              />
            </Link>
            <Link className="social__items" href="#">
              {" "}
              <Image
                width={30}
                height={30}
                src="/img/icons/social/twitter.svg"
                alt="instagram"
              />
            </Link>
            <Link className="social__items" href="#">
              {" "}
              <Image
                width={30}
                height={30}
                src="/img/icons/social/facebook-f.svg"
                alt="instagram"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};
