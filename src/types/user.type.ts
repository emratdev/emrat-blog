import type { UserRoles } from "@/const/user-roles.const";

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: typeof UserRoles[number]["role"];
    avatar: string;
};
