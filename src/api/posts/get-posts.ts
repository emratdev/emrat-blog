 import type { Post } from '@/types/post.type';
import { ENV } from '../../configs/.env.config';
 
 export const getPosts = async ({page}:Params):Promise<Post[]> => {
   try {
      const response = await fetch(`${ENV.API_URL}/api/posts?_page=${page}&_limit=10`,);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const posts = await response.json();
      return posts as Post[];
   } catch (error) {
      console.error('Failed to fetch posts:', error);
      return [];
   }
    
    
 }

 interface Params {
   page?: number;
 }