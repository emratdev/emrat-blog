type Props = {
  post: {
    id: number;
    title: string;
    content: string;
    authorId: number;
  };
};

export default function PostActions({ post }: Props) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user?.id !== post?.authorId) return null;

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/posts/${post.id}`, {
      method: "DELETE",
    });
    alert("O‘chirildi");
  };

  return (
    <div>
      <button onClick={() => alert("Tahrirlash hali yo‘q")}>
        ✏️ Tahrirlash
      </button>
      <button onClick={handleDelete}>🗑️ O‘chirish</button>
    </div>
  );
}
