import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

type Props = {
  workspaceId: Id<"workspaces">;
};
/**
 * Fetches a workspace by ID from the Convex database.
 *
 * @param {Props} { workspaceId } - The ID of the workspace to fetch.
 * @returns {object} An object with `isLoading` and `data` properties.
 *   `isLoading` is true if the query is still running, false otherwise.
 *   `data` is the workspace object if the query is successful, null or undefined otherwise.
 */
export const useGetWorkspace = ({ workspaceId }: Props) => {
  const data = useQuery(api.workspaces.getWorkspaceById, { workspaceId });
  const isLoading = data === undefined;

  return {
    isLoading,
    data,
  };
};
