import { ENV } from "@/configs/env.config";
import type { Post } from "@/types/post.type";


export const getPostById = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(`${ENV.API_URL}/posts/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const posts = await response.json();
    return posts as Post;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return {} as Post;
  }
};

