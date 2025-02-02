"use client";
import * as React from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { SignInCard } from "@/features/auth/components/sign-in-card";
export default function AuthPage() {
  return (
    <div className="flex size-full items-center justify-center p-4">
      <Magnetic
        intensity={0.4}
        springOptions={{ bounce: 0.2 }}
        actionArea="global"
        range={200}
      >
        <div className="md:h-auto md:w-[420px]">
          <SignInCard />
        </div>
      </Magnetic>
    </div>
  );
}
