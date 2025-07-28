import type { Post } from '@/types/post.type';
import { ENV } from '../../configs/.env.config';
 
 export const getPostById = async (id: number):Promise<Post> => {
   try {
      const response = await fetch(`${ENV.API_URL}/api/posts/${id}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const posts = await response.json();
      return posts as Post;
   } catch (error) {
      console.error('Failed to fetch posts:', error);
      return {} as Post;
   }
    
    
 }

 interface Params {
   page?: number;
 }