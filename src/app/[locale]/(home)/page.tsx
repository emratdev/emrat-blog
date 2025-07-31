import type { PageType } from "@/types/types";

import {Content} from "./_components/content";
import { searchParamsCache } from "@/lib/search-params-cache";

const HomePage: PageType = async ({searchParams}) => {
  const {page} = await searchParamsCache.parse(searchParams)
  return (
    <>
      <Content page={page} key={page} />
    </>
  );
};

export default HomePage;
