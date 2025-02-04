import * as React from "react";
import { Sidebar } from "./components/sidebar";
import { Toolbar } from "./components/toolbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { WorkspaceSidebar } from "./components/workspace-sidebar";
export default function WorkspaceIdLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        <ResizablePanelGroup direction="horizontal" autoSaveId={"workspace"}>
          <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
            <WorkspaceSidebar/>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel
          defaultSize={90} maxSize={100}
          >{children}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
