import type { PageType } from "@/type/types";

import InnerPage from "./_components/inner";
import Content from "./_components/content";

const HomePage: PageType = async () => {
   return <>
      <Content/>
      <InnerPage/>
   </>
}


export default HomePage;