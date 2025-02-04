import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { getAuthUserId } from "@convex-dev/auth/server";
import { generateRandomCode } from "@/lib/utils";

export const createWorkspace = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    // verify the user is logged in
    const userId: Id<"users"> | null = await getAuthUserId(ctx);

    if (!userId) throw new Error("Unauthorized Access");

    // create the workspace
    const workspaceId = await ctx.db.insert("workspaces", {
      name: args.name,
      userId,
      joinCode: generateRandomCode(6),
    });

    // create member when workspace is created
    await ctx.db.insert("members", {
      userId,
      workspaceId,
      role: "ADMIN",
    });

    return workspaceId;
  },
});

export const getWorkspaces = query({
  args: {},

  handler: async (ctx) => {
    const userId: Id<"users"> | null = await getAuthUserId(ctx);

    if (!userId) {
      return [];
    }

    const members = await ctx.db
      .query("members")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .collect();

    const workspaceIds: Id<"workspaces">[] = members.map(
      (workspace) => workspace.workspaceId
    );

    // get the workspaces
    const workspaces = [];

    for (const workspaceId of workspaceIds) {
      const workspace = await ctx.db.get(workspaceId);

      if (workspace) {
        workspaces.push(workspace);
      }
    }

    return workspaces;
  },
});

export const getWorkspaceById = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    // verify the auth user
    const userId: Id<"users"> | null = await getAuthUserId(ctx);

    if (!userId) throw new Error("Unauthorized Access");

    const members = await ctx.db
      .query("members")
      .withIndex("by_user_id_workspace_id", (q) =>
        q.eq("userId", userId).eq("workspaceId", args.workspaceId)
      )
      .unique();

    if (!members) return null;

    const workspace = await ctx.db.get(args.workspaceId);

    return workspace;
  },
});
