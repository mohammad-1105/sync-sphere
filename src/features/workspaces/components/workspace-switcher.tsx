"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useGetWorkspaceId } from "@/features/workspaces/hooks/use-get-workspace-id";
import { useWorkspaceModalCreationStore } from "@/features/workspaces/store/use-workspace-modal-creation-store";
import { Button } from "@/components/ui/button";
import { Loader, Plus } from "lucide-react";

export function WorkspaceSwitcher() {
  const router = useRouter();
  const { workspaceId } = useGetWorkspaceId();
  const { isLoading: isWorkspaceLoading, data: workspaceData } =
    useGetWorkspace({ workspaceId });
  const { data: workspacesData } = useGetWorkspaces();
  const { setOpen } = useWorkspaceModalCreationStore();

  const filterWorkspace = workspacesData?.filter(
    (workspace) => workspace._id !== workspaceId
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"sm"} className="size-9">
          {isWorkspaceLoading ? (
            <Loader className="size-5 animate-spin" />
          ) : (
            workspaceData?.name?.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom" className="select-none">
        <div className="ml-2 flex flex-col items-start gap-0">
          <h3 className=" font-bold">Personal</h3>
          <span className="text-xs text-muted-foreground">
            Active workspace
          </span>
        </div>
        <DropdownMenuItem className="flex items-center justify-start">
          {/* Active user workspace */}
          <Button size={"sm"} variant={"secondary"}>{workspaceData?.name?.charAt(0).toUpperCase()}</Button>
          <p> {workspaceData?.name + " Workspace"}</p>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-2" />

        {/* All workspaces except active */}
        <span className="ml-2 text-xs text-muted-foreground">
          All workspaces
        </span>
        {filterWorkspace?.map((workspace) => (
          <DropdownMenuItem
            className="cursor-pointer capitalize"
            key={workspace._id}
            onClick={() => router.push(`/workspaces/${workspace._id}`)}
          >
            {workspace.name + " Workspace"}
          </DropdownMenuItem>
        ))}
        
        {/* Create new workspace */}
        <DropdownMenuItem asChild>
          <Button
            className="w-full cursor-pointer"
            variant={"secondary"}
            onClick={() => setOpen(true)}
          >
            <Plus className="mr-2 size-5" /> Create Workspace
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
