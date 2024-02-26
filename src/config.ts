import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "ms", "ar"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    ar: "/أسماء المسارات",
    ms: "nama laluan",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
