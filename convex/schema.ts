import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  workspaces: defineTable({
    name: v.string(),
    userId: v.id("users"),
    joinCode: v.string(),
  }),
  members: defineTable({
    userId: v.id("users"),
    workspaceId: v.id("workspaces"),
    role: v.union(v.literal("ADMIN"), v.literal("MEMBER")),
  })
    .index("by_user_id", ["userId"])
    .index("by_workspace_id", ["workspaceId"])
    .index("by_user_id_workspace_id", ["userId", "workspaceId"]),
});

export default schema;
