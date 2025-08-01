import { ENV } from "@/configs/env.config";
import { createSearchParams } from "@/lib/utils";

export const getComments = async ({ postId }: Params) => {
  const searchParams = createSearchParams({
    postId,
  });

  try {
    const res = await fetch(`${ENV.API_URL}/comments?${searchParams}`) 
    const posts = await res.json();
    return posts as Comment[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

interface Params {
  postId?: number;

};
 