import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import type { User } from "./types/user.type";

const intlMiddleware = createMiddleware({ ...routing, localeDetection: false });

const removeLocale = (url: URL) => {
  const pathname = url.pathname.replace(/^\/(ru|en)/, "");
  return new URL(pathname, url);
};

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  const session = request.cookies.get("hipsum_blog")?.value;
  const user = session ? (JSON.parse(session) as User) : null;

  const PathWithoutLocale = removeLocale(new URL(request.url)).pathname;

  // 🔐 Redirect unauthenticated users away from /admin
  if (!user && PathWithoutLocale.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/en/auth/register", request.url));
  }

  if (user && PathWithoutLocale.startsWith("/admin")) {
    if (["AUTHOR", "ADMIN"].includes(user.role)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/en/", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/", "/(ru|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
