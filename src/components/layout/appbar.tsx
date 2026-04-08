"use client";

import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/inventory": "Inventory",
  "/customers": "Customers",
  "/settings": "Settings",
};

export default function AppBar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="text-lg font-semibold">{title}</div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Bell size={18} />
        </Button>

        <Button variant="ghost" size="icon">
          <User size={18} />
        </Button>
      </div>
    </header>
  );
}
