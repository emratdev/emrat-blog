import type { PageType } from "@/types/types";
import { CreatePost } from "./_components/create-post";

const Page: PageType = async () => {
    return (
      <section className="py-10 space-y-5">
        <div className="container">
          <div className="text-right">
            <CreatePost />{" "}
          </div>
        </div>
      </section>
    );
}

export default Page