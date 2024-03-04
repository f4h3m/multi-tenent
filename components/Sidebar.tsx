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
import { ChevronRight, LogOut } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="bg-white px-5 py-2">
      <div className="flex justify-between items-end h-full">
        <Popover>
          <PopoverTrigger className="w-full flex justify-between items-center px-2 py-2 rounded-lg hover:bg-[#f4f4f4]">
            <span className="flex items-center">
              <Avatar className="w-7 h-7">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="ml-3">User Name</span>
            </span>
            <ChevronRight />
          </PopoverTrigger>
          <PopoverContent className="w-[200px]" align="end" side="right">
            <ul className="mb-3">
              <li>option 1</li>
              <li>option 2</li>
              <li>option 3</li>
              <li>option 4</li>
            </ul>
            <span
              className="cursor-pointer w-full border-t-2 pt-2 flex justify-between items-center"
              onClick={() => {
                signOut({ redirect: false }).then(() => {
                  router.push("/"); // Redirect to the dashboard page after signing out
                });
              }}
            >
              <span>Logout</span>
              <LogOut />
            </span>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
