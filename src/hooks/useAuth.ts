"use client";
import { useEffect, useState } from "react";

export type User = {
  id: number;
  username: string;
  role: "USER" | "AUTHOR";
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
  }, []);

  return {
    user,
    isAuthor: user?.role === "AUTHOR",
    isUser: user?.role === "USER",
  };
}
