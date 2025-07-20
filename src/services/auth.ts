// services/auth.ts
export async function login(username: string, password: string) {
  const res = await fetch(
    `http://localhost:3001/users?username=${username}&password=${password}`
  );
  const users = await res.json();

  if (users.length === 1) {
    return users[0]; // user object with role
  } else {
    throw new Error("Login failed");
  }
}
