"use client"

import Link from "next/link"
import { Home, Package, Users, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Package,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen">
      <div className="p-6 font-semibold text-lg">
        ERP System
      </div>

      <nav className="space-y-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition"
              )}
            >
              <Icon size={18} />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}