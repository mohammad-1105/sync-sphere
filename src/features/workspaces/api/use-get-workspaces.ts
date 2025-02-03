import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useGetWorkspaces = () => {
  const data = useQuery(api.workspaces.getWorkspaces);
  const isLoading = data === null || data === undefined;

  return {
    isLoading,
    data,
  };
};
