import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default function RootPage() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center mb-5">
          Welcome to Multi-tenent <br />
          Next.js App
        </h1>
        <Link href={`http://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/login`}>
          <Button className="px-10 py-2 inline-block mt-4 bg-black text-white">
            Login
          </Button>
        </Link>
      </section>
    </>
  );
}
