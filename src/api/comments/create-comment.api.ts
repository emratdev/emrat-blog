import { ENV } from "@/configs/env.config";
import type { Comment } from "@/types/comment.type";


export const createComment = async (body: Omit<Comment, "id">) => {
  try {
    const response = await fetch(`${ENV.API_URL}/comments`, {
         method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const comment = await response.json();
    return comment as Comment;
    
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return null;
  }
};

