"use client";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter, SquarePen } from "lucide-react";
import { Doc } from "../../../../../../convex/_generated/dataModel";
import { Hint } from "@/components/hint";

type WorkspaceHeaderProps = {
  workspace: Doc<"workspaces">;
  isAdmin: boolean;
};
export default function WorkspaceHeader({
  workspace,
  isAdmin,
}: WorkspaceHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} className="w-full shrink">
            <span>{workspace.name}</span>
            <ChevronDown className="ml-1 size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex items-center justify-start">
            {/* Active user workspace */}
            <Button size={"sm"} variant={"default"}>
              {workspace.name.charAt(0).toUpperCase()}
            </Button>
            <div className="ml-1 flex flex-col items-start gap-0">
              <p> {workspace.name + " Workspace"}</p>
              <span className="text-xs text-muted-foreground">
                Active workspace
              </span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-1" />

          {isAdmin && (
            <div className="flex cursor-pointer flex-col gap-0.5">
              <DropdownMenuItem className="py-2">
                <span>Invite to {workspace.name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-2">
                <span>Prefrences</span>
              </DropdownMenuItem>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center gap-0.5 bg-transparent">
        <Hint label="Filter" side="bottom" align="center">
          <Button variant={"ghost"}>
            <Filter className="size-4" />
          </Button>
        </Hint>
        <Hint label="New Message" side="bottom" align="center">
          <Button variant={"ghost"}>
            <SquarePen className="size-4" />
          </Button>
        </Hint>
      </div>
    </div>
  );
}
