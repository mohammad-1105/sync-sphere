import React from "react";
import type { Metadata } from "next";
import { Roboto_Mono as RobotoMono } from "next/font/google";
import "./globals.css";

import { ConvexClientProvider } from "@/components/providers/convex-client-provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ModalsProviders } from "@/components/providers/modals-providers";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";

const robotoMono = RobotoMono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SyncSphere",
  description:
    "SyncSphere is a modern team collaboration platform designed to unify communication, task management, and workflow automation in one intuitive space. Built for remote teams, startups, and classrooms, SyncSphere empowers users to stay in sync, reduce clutter, and focus on what matters most: _progress_",
  keywords: [
    "SyncSphere",
    "Team collaboration",
    "Task management",
    "Workflow automation",
    "Remote collaboration",
    "Classrooms",
  ],
  authors: [{ name: "Mohammad Aman", url: "https://github.com/mohammad-1105" }],
  openGraph: {
    title: "SyncSphere",
    description:
      "SyncSphere is a modern team collaboration platform designed to unify communication, task management, and workflow automation in one intuitive space. Built for remote teams, startups, and classrooms, SyncSphere empowers users to stay in sync, reduce clutter, and focus on what matters most: _progress_",
    type: "website",
    locale: "en_US",
    siteName: "SyncSphere",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${robotoMono.variable} ${robotoMono.className} antialiased selection:bg-foreground selection:text-primary-foreground`}
        >
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ModalsProviders />
              {children}
              <Toaster position="top-center" />
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
