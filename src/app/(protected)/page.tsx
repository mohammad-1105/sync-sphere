

import * as React from "react";

import UserButton from "@/features/auth/components/user-button";

export default function HomePage() {

  return (
    <main className="size-full">
      HomePage
      <div className="p-12">
        <UserButton />
      </div>
    </main>
  );
}
