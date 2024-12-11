"use server";

import { cookies } from "next/headers";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.

const COOKIE_NAME = "NEXT_LOCALE";
export async function getUserLocale(): Promise<"mn" | "en"> {
  const cookieStore = await cookies();
  const locale = cookieStore.get(COOKIE_NAME)?.value || "en";
  return (["mn", "en"].includes(locale) ? locale : "en") as "mn" | "en";
}

export async function setUserLocale(locale: "en" | "mn") {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}

export async function setLocale() {
  const locale = await getUserLocale();
  setUserLocale(locale === "en" ? "mn" : "en");
}
