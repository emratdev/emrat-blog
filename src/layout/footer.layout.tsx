import { Facebook, Instagram, Twitter } from "lucide-react";
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
              <Instagram />
            </Link>
            <Link className="social__items" href="#">
              <Twitter size={40} />
            </Link>
            <Link className="social__items" href="#">
              {" "}
              <Facebook size={40} />
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
