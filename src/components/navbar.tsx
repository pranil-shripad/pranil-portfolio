"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, FolderOpen, Briefcase, Wrench, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: FolderOpen, href: "/projects", label: "Projects" },
  { icon: Briefcase, href: "/experience", label: "Experience" },
  { icon: Wrench, href: "/tools", label: "Tools" },
  { icon: Mail, href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="floating-nav flex items-center gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "p-2.5 rounded-full transition-all duration-200",
                isActive
                  ? "bg-accent-orange text-white"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
              aria-label={item.label}
              title={item.label}
            >
              <item.icon className="size-4" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
