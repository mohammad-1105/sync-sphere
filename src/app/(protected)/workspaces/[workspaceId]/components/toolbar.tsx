"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import { useGetWorkspaceId } from "@/features/workspaces/hooks/use-get-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { ModeToggle } from "@/components/mode-toggle";

export function Toolbar() {
  const { workspaceId } = useGetWorkspaceId();
  const { isLoading, data } = useGetWorkspace({ workspaceId });
  return (
    <nav className="flex h-10 items-center justify-between border-b p-1.5">
      <div className="flex-1" />
      <div className="min-w-[280px] max-w-[624px] shrink grow-[2]">
        <Button
          size={"sm"}
          variant={"ghost"}
          className="h-7 w-full justify-start bg-foreground/10 hover:bg-foreground/10 "
        >
          <Search className="mr-2 size-4 " />
          <span>{isLoading ? "Loading..." : data?.name + " Workspace"}</span>
        </Button>
      </div>

      <div className="ml-auto flex flex-1 items-center justify-end">
        <ModeToggle />
      </div>
    </nav>
  );
}
