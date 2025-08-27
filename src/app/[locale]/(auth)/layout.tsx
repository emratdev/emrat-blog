import type { LayoutType } from "@/types/types";
import "@/styles/globals.css";

const RootLayout: LayoutType = async (props) => {
  const { children } = await props;

  return <main className="flex-1">{children}</main>;
};

export default RootLayout;
