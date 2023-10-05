"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session } = useSession();

  return (
    <div>
      <p>{session?.user.email}</p>
      <p>{session?.user.id}</p>
      <p>{session?.user.name}</p>
      <Button onClick={() => signOut({ callbackUrl: "/login" })}>Logout</Button>
    </div>
  );
};

export default Page;
