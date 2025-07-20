import { useEffect, useState } from "react";
import PostActions from "@/app/[locale]/_components/PostActions";


type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
};

export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Maqolalar</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <PostActions post={post} />
        </div>
      ))}
    </div>
  );
}
