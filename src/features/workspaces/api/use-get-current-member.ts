import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

type Props = {
  workspaceId: Id<"workspaces">;
};
export const useGetCurrentMember = ({ workspaceId }: Props) => {
  const data = useQuery(api.members.getCurrentMember, { workspaceId });

  const isLoading = data === undefined;

  return {
    isLoading,
    data,
  };
};
