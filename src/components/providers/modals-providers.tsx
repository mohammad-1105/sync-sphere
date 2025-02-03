"use client";
import * as React from "react";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

export function ModalsProviders() {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
}
