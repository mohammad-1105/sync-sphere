import { z } from "zod";

const createWorkspaceSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Workspace Name is required" })
    .max(30, { message: "Workspace Name must be less than 30 characters" }),
});

type CreateWorkspaceSchema = z.infer<typeof createWorkspaceSchema>;

export { createWorkspaceSchema, type CreateWorkspaceSchema };
