import type { LayoutType } from "@/types/types";
import { HeaderLayout } from "@/layout/header.layout";
import "@/styles/globals.css";
import { FooterLayout } from "@/layout/footer.layout";



const RootLayout: LayoutType = async (props) => {
  const { children } = await props;


  return (
    <>
      <HeaderLayout />
      <main className="flex-1">{children}</main>
      <FooterLayout />
    </>
  );
};

export default RootLayout;
