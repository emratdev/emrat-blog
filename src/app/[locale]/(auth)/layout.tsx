import type { LayoutType } from "@/types/types";
import "@/styles/globals.css";



const RootLayout: LayoutType = async (props) => {
  const { children } = await props;

  return (
      <body className="min-h-screen flex flex-col">
        
            <main className="flex-1">{children}</main>
           
      </body>
  );
};

export default RootLayout;
 