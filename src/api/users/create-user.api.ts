import { ENV } from "@/configs/env.config";
import type { UserRoles } from "@/const/user-roles.const";
import type { User } from "@/types/user.type";

export const createUser = async (body: Payload) => {
  try {
    const response = await fetch(`${ENV.API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const user = await response.json();
    return user as User;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return null;
  }
};

interface Payload {
  username: string;
  email: string;
  password: string;
  role: (typeof UserRoles)[number]["role"];
  avatar: string;
}
