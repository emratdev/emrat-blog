import type { LayoutType } from "@/types/types";
import { NextIntlClientProvider } from "next-intl";
import { HeaderLayout } from "@/layout/header.layout";
import "@/styles/globals.css";
import { FooterLayout } from "@/layout/footer.layout";
import { NuqsAdapter } from "nuqs/adapters/next";



const RootLayout: LayoutType = async (props) => {
  const { children } = await props;


  return (
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <NuqsAdapter>
            <HeaderLayout />
            <main className="flex-1">{children}</main>
            <FooterLayout />
          </NuqsAdapter>
        </NextIntlClientProvider>
      </body>
  );
};

export default RootLayout;
