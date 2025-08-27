"use server";

import { cookies } from "next/headers";

export const getUser = async () => {
  const session = (await cookies()).get("hipsum_blog")?.value;

  return session ? JSON.parse(session) : null;
};
