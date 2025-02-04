"use client";
import * as React from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { User, LogOut, Loader } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { Button } from "@/components/ui/button";

export function UserButton() {
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const { signOut } = useAuthActions();
  const { data } = useCurrentUser();

  const handleSignOut = (): void => {
    setIsPending(true);
    signOut()
      .then(() => {
        window.location.href = "/auth"; // Force a full page reload
      })
      .catch((err) => console.error("Error in Signing out: ", err))
      .finally(() => setIsPending(false));
  };

  if (data === null) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer select-none transition-all hover:opacity-75"
      >
        <Avatar className="size-10">
          <AvatarImage src={data?.image} />
          <AvatarFallback>
            <User className="size-4/5 overflow-hidden" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"center"} side={"left"}>
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={() => handleSignOut()}
        >
          {isPending ? (
            <Loader className="size-5 w-full animate-spin" />
          ) : (
            <>
              <LogOut className="mr-2 size-5" />
              Sign Out
            </>
          )}
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
