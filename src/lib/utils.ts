import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Time = dayjs;

export const createSearchParams = (params: Record<string, unknown>) => {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    if (
      params[key] !== undefined &&
      params[key] !== null &&
      params[key] !== ""
    ) {
      searchParams.set(key, `${params[key]}`);
    }
  }
  return searchParams.toString();
};
