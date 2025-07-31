import { ENV } from "@/configs/env.config";
import { createSearchParams } from "@/lib/utils";
import type { Post } from "@/types/post.type";

export const getPosts = async ({ limit, page, order, sort }: Params) => {
  const searchParams = createSearchParams({
    _page: page, 
    _limit: limit,
    _sort: sort,
    _order: order
  });

  try {
    const res = await fetch(`${ENV.API_URL}/posts?${searchParams}`) 
    const posts = await res.json();
    return posts as Post[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

interface Params {
  page?: number;
  limit?: number;
  order?: string;
  sort?: string;
};
