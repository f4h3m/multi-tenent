"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setisLoading] = useState<boolean>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        toast.warning("Invalid details!");
        setisLoading(false);
        return;
      }
      toast.success("Login successfully!");
      router.replace("dashboard");
    } catch (error: any) {
      toast.warning(error);
      setisLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          {/* <Label htmlFor="name">Email Address</Label> */}
          <Input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          {/* <Label htmlFor="framework">Password</Label> */}
          <Input
            type="password"
            placeholder="Your Passoword"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">
          {isLoading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 lucide lucide-loader-2 animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          )}
          Login
        </Button>
      </div>
    </form>
  );
}
