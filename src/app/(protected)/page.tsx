"use client";

import * as React from "react";
import { useCheckWorkspaceCreation } from "@/features/workspaces/hooks/use-check-workspace-creation";

export default function HomePage() {
  useCheckWorkspaceCreation();
  return (
    <main className="size-full">
      HomePage
      
    </main>
  );
}
