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

    return workspaceId;
  },
});

export const getWorkspaces = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workspaces").collect();
  },
});

export const getWorkspaceById = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    // verify the auth user
    const userId: Id<"users"> | null = await getAuthUserId(ctx);

    if (!userId) throw new Error("Unauthorized Access");

    const workspace = await ctx.db.get(args.workspaceId);

    return workspace;
  },
});
