"use client";
import * as React from "react";
// import { useGetWorkspaceId } from "@/features/workspaces/hooks/use-get-workspace-id";
// import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
export default function WorkspacePage() {
  // const { workspaceId } = useGetWorkspaceId();
  // const { isLoading, data } = useGetWorkspace({ workspaceId });

  return (
    <div className="">
      <h1>Workspace Page</h1>

      {/* <p>workspace Id: {workspaceId}</p> */}

      {/* <div>
        {isLoading && <p>Loading...</p>}

        {!isLoading && data && <p>Workspace name: {JSON.stringify(data)}</p>}
      </div> */}
    </div>
  );
}
