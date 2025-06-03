import { RoleGate } from "@/components/auth/role-gate";
import { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4">
      <RoleGate allowedRole={"USER"}>{children}</RoleGate>
    </div>
  );
};

export default UserLayout;
