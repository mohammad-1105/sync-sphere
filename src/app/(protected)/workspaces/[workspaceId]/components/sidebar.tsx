"use client";

import { UserButton } from "@/features/auth/components/user-button";
import * as React from "react";

export function Sidebar() {
  return (
    <aside className="flex h-full w-[70px] flex-col items-center gap-y-4  border-r pb-4 pt-[9px]">
      Sidebar
      <div className="mt-auto flex items-center justify-center space-y-1">
        <UserButton />
      </div>
    </aside>
  );
}
