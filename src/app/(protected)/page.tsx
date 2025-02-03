"use client";

import * as React from "react";
// import { useCheckWorkspaceCreation } from "@/features/workspaces/hooks/use-check-workspace-creation";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useWorkspaceModalCreationStore } from "@/features/workspaces/store/use-workspace-modal-creation-store";
import { Id } from "../../../convex/_generated/dataModel";
export default function HomePage() {
  const { isLoading, data } = useGetWorkspaces();
  const { open, setOpen } = useWorkspaceModalCreationStore();
  const router = useRouter();
  const workspaceId: Id<"workspaces"> | undefined = data?.[0]?._id;

  React.useEffect(() => {
    if (!isLoading) {
      if (workspaceId) {
        // redirect to workspace
        router.push(`/workspaces/${workspaceId}`);
      } else if (!open) {
        // open modal
        setOpen(true);
      }
    }
  }, [isLoading, workspaceId, open, setOpen, router]);

  if (isLoading || !workspaceId) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="size-8 animate-spin" />
      </div>
    );
  }
}
