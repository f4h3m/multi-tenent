"use client";
import Image from "next/image";
import { useState } from "react";
import { addDomainToVercel } from "@/lib/domains";

export default function Home() {
  const [subdomain, setSubdomain] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(subdomain);
    if (subdomain) {
      addDomainToVercel(subdomain);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="mb-2 text-center text-md font-semibold">
          Add New Subdomain
        </h1>
        <form className="flex flex-col w-[300px]" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setSubdomain(e.target.value)}
            placeholder="Subdomain name"
            className="p-2 rounded-md text-black"
          />
          <button
            className="bg-slate-500 text-white mt-4 p-2 rounded-md duration-300 hover:bg-white hover:text-black font-semibold"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
