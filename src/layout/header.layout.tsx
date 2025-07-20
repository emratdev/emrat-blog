import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const HeaderLayout = () => {
  return (
    <header className="section-header">
      <div className="header__social">
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
      <div className="header__logo">
        <h1 className="title">Hipsum Blog</h1>
      </div>
      <div className="header__right">
        <div className="header__search">
          <Image
            width={30}
            height={30}
            src="/img/icons/search.svg"
            alt="search"
          />
        </div>
        <Link href="/register">
          <div className="button">Subscribe</div>
        </Link>
      </div>
    </header>
  );
};
