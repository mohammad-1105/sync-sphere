"use client";
import * as React from "react";
import { useGetWorkspaceId } from "@/features/workspaces/hooks/use-get-workspace-id";
import { useGetCurrentMember } from "@/features/workspaces/api/use-get-current-member";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { AlertTriangle, Loader } from "lucide-react";
import WorkspaceHeader from "./workspace-header";

export function WorkspaceSidebar() {
  const { workspaceId } = useGetWorkspaceId();
  const { isLoading: isLoadingMember, data: member } = useGetCurrentMember({
    workspaceId,
  });
  const { isLoading: isLoadingWorkspace, data: workspace } = useGetWorkspace({
    workspaceId,
  });

  if (isLoadingMember || isLoadingWorkspace) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Loader className="size-7 animate-spin" />
      </div>
    );
  }

  if (!workspace || !member) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-y-1 text-destructive/90">
        <AlertTriangle className="size-7 " />
        <h2 className="font-semibold">Workspace not found</h2>
      </div>
    );
  }

  return (
    <div className="h-full truncate p-2">
      <WorkspaceHeader
        workspace={workspace}
        isAdmin={member.role === "ADMIN"}
      />
    </div>
  );
}
