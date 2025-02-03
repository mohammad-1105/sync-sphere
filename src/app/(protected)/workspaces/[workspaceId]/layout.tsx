import { Sidebar } from "./components/sidebar";
import { Toolbar } from "./components/toolbar";
import * as React from "react";

export default function WorkspaceIdLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
