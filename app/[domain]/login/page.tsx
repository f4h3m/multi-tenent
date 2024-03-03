import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/forms/LoginForm";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Loginpage() {
  const session = await getSession();
  if (session) redirect("/dashboard");
  return (
    <div className="flex flex-col h-screen items-center justify-center shadow-md">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
