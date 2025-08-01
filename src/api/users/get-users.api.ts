import { ENV } from "@/configs/env.config";
import type { User } from "@/hooks/useAuth";
import { createSearchParams } from "@/lib/utils";

export const getUsers = async ({ username, email, password }: Params) => {
  const searchParams = createSearchParams({
    username,
    email,
    password
    
  });

  try {
    const res = await fetch(`${ENV.API_URL}/users?${searchParams}`) 
    const users = await res.json();
    return users as User[];
  } catch (error) {
    console.log(error);
    return [];
  }
};



interface Params {
    username?: string;
    email?: string;
    password?: string;
}