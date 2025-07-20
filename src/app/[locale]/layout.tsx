import { routing } from "@/i18n/routing";
import type { LayoutType } from "@/type/types";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { HeaderLayout } from "@/layout/header.layout";
import "@/styles/globals.css"
import { FooterLayout } from "@/layout/footer.layout";

const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin", "cyrillic"]

} )

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const RootLayout: LayoutType = async (props) => {
const { params, children } = await props;
const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={cn(montserrat.className, "scroll-smooth")}
    >
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <HeaderLayout/>
          <main className="flex-1">{children}</main>
          <FooterLayout/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
