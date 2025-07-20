import { useState } from "react";
import { withAuthor } from "@/utils/withAuthor";

function AddPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        authorId: user.id,
      }),
    });

    alert("Maqola qo‘shildi");
  };

  return (
    <div>
      <h2>Yangi maqola qo‘shish</h2>
      <input
        placeholder="Sarlavha"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Matn"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Yuborish</button>
    </div>
  );
}

export default withAuthor(AddPostPage); // faqat AUTHOR kiradi
