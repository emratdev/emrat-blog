import { ENV } from "@/configs/env.config";
import type { User } from "@/types/user.type";
  
export const getUserById = async (id: number) => {


  try {
    const res = await fetch(`${ENV.API_URL}/users/${id}`) 
    const users = await res.json();
    return users as User;
  } catch (error) {
    console.log(error);
    return null;
  }
};


