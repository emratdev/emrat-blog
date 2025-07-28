import type { PageType } from "@/types/types";

import InnerPage from "./_components/inner";
import {Content} from "./_components/content";
import { searchParamsCache } from "@/lib/search-params-cache";

const HomePage: PageType = async ({searchParams}) => {
  const {page} = await searchParamsCache.parse(searchParams)
  return (
    <>
      <Content page={page} key={page} />
      <InnerPage />
    </>
  );
};

export default HomePage;
