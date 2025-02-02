"use client";

import * as React from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { signOut } = useAuthActions();
  return (
    <main className="size-full">
      HomePage
      <Button  variant={"destructive"} onClick={() => signOut()}>Sign Out</Button>
    </main>
  );
}
