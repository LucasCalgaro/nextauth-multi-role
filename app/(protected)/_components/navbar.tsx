"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useCurrentRoles } from "@/hooks/use-current-role";
import { roleInUse } from "@/lib/role-in-use";

export const Navbar = () => {
  const pathname = usePathname();
  const user = useCurrentUser();
  const roles = useCurrentRoles();

  const options = [
    {
      label: "Admin",
      href: "/admin",
      roles: ["ADMIN", "USER"],
    },
    {
      label: "User",
      href: "/user",
      roles: ["ADMIN", "USER"],
    },
    {
      label: "Settings",
      href: `/${roleInUse(pathname, roles || [])}/settings`,
      roles: ["ADMIN", "USER"],
    },
  ];

  return (
    <nav className="flex justify-between items-center p-4 w-full bg-primary-foreground">
      <div className="flex gap-x-2">
        {user &&
          options.map((option) => (
            <Button
              key={option.href}
              asChild
              variant={pathname === option.href ? "default" : "outline"}
            >
              <Link href={option.href}>{option.label}</Link>
            </Button>
          ))}
      </div>
      <UserButton />
    </nav>
  );
};
