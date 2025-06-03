import { RoleGate } from "@/components/auth/role-gate";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4">
      <RoleGate allowedRole={"ADMIN"}>{children}</RoleGate>
    </div>
  );
};

export default AdminLayout;
