import { ENV } from "@/configs/env.config";
import type { Comment } from "@/types/comment.type";

export const getCommentById = async (id: number) => {


  try {
    const res = await fetch(`${ENV.API_URL}/comments/${id}`) 
    const posts = await res.json();
    return posts as Comment;
  } catch (error) {
    console.log(error);
    return null;
  }
};

