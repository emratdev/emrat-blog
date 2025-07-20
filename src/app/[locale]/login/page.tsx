"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl"; // ✅ locale ni olish uchun

type User = {
  id: number;
  username: string;
  password: string;
  role: "USER" | "AUTHOR";
};

export default function LoginPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const locale = useLocale(); // ✅

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) =>
        console.error("Foydalanuvchilarni olishda xatolik:", err)
      );
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (u: User) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push(`/${locale}`); // ✅ bosh sahifaga locale bilan
    } else {
      setError("Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2 className="font-bold text-2xl text-center">Kirish</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginBottom: 10 }}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%" }}
          className="bg-color-gray-100 border border-gray-300 rounded p-2"
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%" }}
          className="bg-color-gray-100 border border-gray-300 rounded p-2"
        />
      </div>

      <button
        className="bg-red-500 font-bold rounded-2xl"
        onClick={handleLogin}
        style={{ width: "100%" }}
      >
        Log In
      </button>
    </div>
  );
}
