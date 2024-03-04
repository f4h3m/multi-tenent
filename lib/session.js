import { cookies } from "next/headers";
export async function getSession() {
  const token =
    cookies()?.get("next-auth.session-token")?.value ||
    cookies()?.get("__Secure-next-auth.session-token")?.value ||
    "";
  if (!token) return null;
  return token;
}
