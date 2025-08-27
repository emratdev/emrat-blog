import { Routers } from "@/configs/router.config";
import { Link } from "@/i18n/navigation";
import type { PageType } from "@/types/types";
import { LoginForm } from "./_components/login-form";

 const Page: PageType = () => {
    return (
          <>
            <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
              <div className="flex w-full max-w-sm flex-col gap-6">
                <Link
                  href={Routers.main}
                  className="flex items-center gap-2 self-center font-medium"
                >
                  Hipsum Blog
                </Link>
                <LoginForm/>
              </div>
            </div>
          </>
        );
 }

 export default Page;