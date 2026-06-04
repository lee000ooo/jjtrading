import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Locale = "ru" | "en" | "zh";

export const locales: Locale[] = ["ru", "en", "zh"];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  zh: "简体中文",
};

export const localePrefixes: Record<Locale, string> = {
  ru: "/ru",
  en: "/en",
  zh: "/zh",
};
