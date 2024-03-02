"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { addDomainToVercel } from "@/lib/domains";
import Error from "next/error";
import { toast } from "sonner";

export default function Home() {
  const [domain, setSubdomain] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setisLoading(true);
    addDomainToVercel(domain)
      .then((response) => {
        if (response.error) {
          toast.warning(response.error.code);
        } else {
          toast.success("Domain added successfully");
        }

        console.log("Domain added successfully:", response);
        // Handle the response here if needed
        setisLoading(false);
        if (formRef.current) {
          formRef.current.reset();
        } else {
          console.warn("Form reference is null");
        }
      })
      .catch((error) => {
        toast.warning(<div className="flex items-start">{error.message}</div>);
        console.error("Error adding domain:", error);
        // Handle errors here
        setisLoading(false);
        if (formRef.current) {
          formRef.current.reset();
        } else {
          console.warn("Form reference is null");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="mb-2 text-center text-md font-semibold text-white">
          Add New Subdomain
        </h1>
        <form
          ref={formRef}
          className="flex flex-col w-[300px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={(e) => setSubdomain(e.target.value)}
            placeholder="Subdomain name"
            className="p-2 rounded-md text-black"
          />
          <button
            className="flex items-center justify-center bg-slate-500 text-white mt-4 p-2 rounded-md duration-300 hover:bg-white hover:text-black font-semibold"
            type="submit"
          >
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
            <span>Create</span>
          </button>
        </form>
      </div>
    </div>
  );
}
