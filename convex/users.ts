import { Id } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId: Id<"users"> | null = await getAuthUserId(ctx);

    if (userId === null) return null;

    return await ctx.db.get(userId);
  },
});
