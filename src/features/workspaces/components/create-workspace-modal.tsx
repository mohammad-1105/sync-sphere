"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createWorkspaceSchema,
  type CreateWorkspaceSchema,
} from "@/features/workspaces/schemas/create-workspace-schema";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useWorkspaceModalCreationStore } from "@/features/workspaces/store/use-workspace-modal-creation-store";
import { useCreateWorkspace } from "@/features/workspaces/api/use-create-workspace";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export function CreateWorkspaceModal() {
  const { open, setOpen } = useWorkspaceModalCreationStore();
  const { mutate, isPending } = useCreateWorkspace();
  const form = useForm<CreateWorkspaceSchema>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: CreateWorkspaceSchema) => {
    await mutate(
      { name: values.name },
      {
        onSuccess: () => {
          toast.success("Workspace created");
          form.reset();
        },
        onError: (error) => {
          toast.error(error.message);
          form.reset();
        },
      }
    );
    setOpen(false);
  };
  const onClose = (): void => {
    setOpen(false);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="select-none">
          <DialogTitle className="text-center">Create a Workspace</DialogTitle>
          <DialogDescription className="text-center">
            Create a workspace to organize your tasks.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="eg. Task, Meeting, Project, Savings, etc..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Create
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
