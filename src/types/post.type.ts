export interface Post {
  id: number;
  title: string;
  created_at: Date;
  comments: Comment[];
  main_photo: string;
  short_description: string;
  content: string;
}

export interface Comment {
  id: number;
  user_avatar: string;
  user_name: string;
  content: string;
}
