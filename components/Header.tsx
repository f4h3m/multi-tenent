"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut } from "next-auth/react";

export default function Header() {
  const router = useRouter();
  return (
    <div className="bg-white px-5 py-2 flex justify-between items-center">
      <h1 className="text-2xl">Logo</h1>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-[200px]">
          <span
            className="cursor-pointer inline-block w-full"
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/"); // Redirect to the dashboard page after signing out
              });
            }}
          >
            Logout
          </span>
        </PopoverContent>
      </Popover>
    </div>
  );
}
