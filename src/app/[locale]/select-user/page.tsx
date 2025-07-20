"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  username: string;
  role: string;
};

export default function SelectUserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  const handleSelect = () => {
    const user = users.find((u) => u.id === parseInt(selectedUserId));
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/"); // Bosh sahifaga o‘tish
    }
  };

  return (
    <div>
      <h2>Foydalanuvchini tanlang</h2>
      <select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value="">--Tanlang--</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username} ({user.role})
          </option>
        ))}
      </select>
      <button onClick={handleSelect} disabled={!selectedUserId}>
        Kirish
      </button>
    </div>
  );
}
