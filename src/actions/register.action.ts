"use server";

import { createUser } from "@/api/users/create-user.api";
import { getUsers } from "@/api/users/get-users.api";
import { redirect } from "@/i18n/navigation";
import { dataUrl } from "@/lib/data-url.util";
import { cookies } from "next/headers";

export const register = async (body: Payload) => {
  const userResponse = await getUsers({
    email: body.email,
  });

  if (userResponse.length > 0) {
    console.warn("User already exists with this email");
    return;
  }

  const avatar = await dataUrl(body.avatar);

  const response = await createUser({
    username: body.username,
    email: body.email,
    password: body.password,
    role: "USER",
    avatar: avatar || "",
  });

  if (!response?.id) {
    throw new Error("User not created");
  }

  const expires = new Date(Date.now() + 3600 * 1000); // 1 hour

  const session = JSON.stringify(response);

  (await cookies()).set({
    name: "hipsum_blog",
    value: session,
    expires,
    path: "/",
    sameSite: "lax",
  });
  redirect({
    locale: "en",
    href: "/",
  });
};

interface Payload {
  username: string;
  email: string;
  password: string;
  avatar: FileList;
}
