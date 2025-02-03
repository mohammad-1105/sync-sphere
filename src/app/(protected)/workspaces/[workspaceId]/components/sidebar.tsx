"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { WorkspaceSwitcher } from "@/features/workspaces/components/workspace-switcher";
import * as React from "react";
import { SidebarButton } from "./sidebar-button";
import { Bell, Home, MessageSquare, MoreHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="flex h-full w-[80px] flex-col items-center gap-y-4  border-r px-2 pb-4 pt-[9px]">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        labal="Home"
        isActive={pathname === "/workspaces"}
      />
      <SidebarButton
        icon={MessageSquare}
        labal="DMs"
        isActive={pathname === ""}
      />
      <SidebarButton
        icon={Bell}
        labal="Activity"
        isActive={pathname === ""}
      />
      <SidebarButton
        icon={MoreHorizontal}
        labal="More"
        isActive={pathname === ""}
      />
      <div className="mt-auto flex items-center justify-center space-y-1">
        <UserButton />
      </div>
    </aside>
  );
}
