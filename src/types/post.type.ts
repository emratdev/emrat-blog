import type { Name } from "./name.type";

export interface Post {
  id: number;
  title: Name;
  created_at: Date;
  main_photo: string;
  content: Name;
  author_id: number;
  comments: string;
}

 