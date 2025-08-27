import { ENV } from "@/configs/env.config";
import type { Post } from "@/types/post.type";

export const createPost = async (body: Omit<Post, "id">) => {
  try {
    const response = await fetch(`${ENV.API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const post = await response.json();
    return post as Post;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return null;
  }
};
