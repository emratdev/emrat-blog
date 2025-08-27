import { Routers } from "@/configs/router.config";
import { Link } from "@/i18n/navigation";
import type { PageType } from "@/types/types";
import { RegisterForm } from "./_components/register-form";


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
            <RegisterForm />
          </div>
        </div>
      </>
    );
}

export default Page;