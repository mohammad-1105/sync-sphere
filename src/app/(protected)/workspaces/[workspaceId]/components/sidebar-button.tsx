"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import * as React from "react";
import { IconType } from "react-icons/lib";

type SidebarButtonProps = {
  icon: LucideIcon | IconType;
  labal: string;
  isActive?: boolean;
};
export function SidebarButton({
  icon: Icon,
  labal,
  isActive,
}: SidebarButtonProps) {
  return (
    <div className="group flex cursor-pointer flex-col items-center  justify-center gap-y-0.5">
      <Button variant={"secondary"}
        className={cn(`size-8 p-2 group-hover:bg-accent/20`,
            isActive && "bg-accent/20"
        )}      >
        <Icon className="size-full transition-all group-hover:scale-110"/>
      </Button>
        <span className="text-xs">{labal}</span>
    </div>
  );
}
