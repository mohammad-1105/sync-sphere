import { useEffect } from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useWorkspaceModalCreationStore } from "@/features/workspaces/store/use-workspace-modal-creation-store";
import { useRouter } from "next/navigation";
export const useCheckWorkspaceCreation = () => {
  const { isLoading, data } = useGetWorkspaces();
  const { open, setOpen } = useWorkspaceModalCreationStore();
  const router = useRouter();
  const workspaceId: Id<"workspaces"> | undefined = data?.[0]?._id;

  useEffect(() => {
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
};
