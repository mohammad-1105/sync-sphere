import { getAuthUserId } from "@convex-dev/auth/server";
import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getCurrentMember = query({
  args: {
    workspaceId: v.id("workspaces"),
  },
  handler: async (ctx, args) => {
    // verify the user
    const userId: Id<"users"> | null = await getAuthUserId(ctx);

    if (!userId) return null;

    // get the members
    const member = await ctx.db
      .query("members")
      .withIndex("by_user_id_workspace_id", (q) =>
        q.eq("userId", userId).eq("workspaceId", args.workspaceId)
      )
      .unique();

    if (!member) return null;

    return member;
  },
});
