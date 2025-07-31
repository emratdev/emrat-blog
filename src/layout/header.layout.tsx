import { Routers } from "@/configs/router.config";
import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";

export const HeaderLayout = () => {
  return (
    <header className="section-header">
      <div className="header__social">
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
      <div className="header__logo">
        <h1 className="title">Hipsum Blog</h1>
      </div>
      <div className="header__right">
        <div className="header__search">
          <Search size={40} />
        </div>
        <Link href={Routers.auth.register}>
          <span role="button" className="button">Subscribe</span>
        </Link>
      </div>
    </header>
  );
};
 