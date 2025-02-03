import { Id } from "../../../../convex/_generated/dataModel";
import { useParams } from "next/navigation";

/**
 * Gets the workspaceId from the URL params.
 *
 * This hook is used to get the workspace ID from the URL parameters.
 * It is used in the workspace page to fetch the workspace data.
 *
 * @returns The workspace ID if it exists, null otherwise.
 */
export const useGetWorkspaceId = () => {
  const workspaceId = useParams()?.workspaceId as Id<"workspaces">;

  return { workspaceId };
};
