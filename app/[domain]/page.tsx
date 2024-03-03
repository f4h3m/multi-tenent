import React from "react";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
export default async function page() {
  const session = await getSession();
  if (session) redirect("/dashboard");
  return (
    <div>
      <h1 className="text-center  h-screen flex items-center justify-center">
        Subdomain Page
      </h1>
    </div>
  );
}
