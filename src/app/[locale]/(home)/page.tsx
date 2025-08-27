import type { PageType } from "@/types/types";

import {Content} from "./_components/content";
import { searchParamsCache } from "@/lib/search-params-cache";
import { setRequestLocale } from "next-intl/server";

const HomePage: PageType = async ({searchParams, params }) => {
  const {locale} = await params;
  setRequestLocale(locale);
  const {page} = await searchParamsCache.parse(searchParams)
  return (
    <>
      <Content page={page} key={page} />
    </>
  );
};

export default HomePage;
