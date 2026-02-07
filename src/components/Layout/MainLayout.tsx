import { type ReactNode } from "react";
import { Sidebar } from "./Sidebar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen font-sans text-text bg-background overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};
