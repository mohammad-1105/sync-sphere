import * as React from "react";

import { SiSyncthing } from "react-icons/si";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { useAuthActions } from "@convex-dev/auth/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export function SignInCard() {
  const [isPending, setIspending] = React.useState<boolean>(false);
  const { signIn } = useAuthActions();

  const handleSignIn = (provider: "google" | "github") => {
    setIspending(true);
    signIn(provider)
      .catch((err) => console.error(`Error signing in with ${provider}`, err))
      .finally(() => setIspending(false));
  };

  return (
    <Card className="relative select-none">
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2 text-2xl">
          Sign In <SiSyncthing className="hover:animate-spin" />
        </CardTitle>
        <CardDescription>Sign in with your choice of provider</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col space-y-5">
        <Button
          variant={"secondary"}
          onClick={() => handleSignIn("google")}
          disabled={isPending}
        >
          <FaGoogle className="mr-2" /> Continue with Google
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => handleSignIn("github")}
          disabled={isPending}
        >
          <FaGithub className="mr-2" /> Continue with Github
        </Button>
      </CardContent>
    </Card>
  );
}
