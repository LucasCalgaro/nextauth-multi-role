"use client";

import { FormError } from "@/components/form-error";
import { useCurrentRoles } from "@/hooks/use-current-role";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: "ADMIN" | "USER";
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const roles = useCurrentRoles();

  if (!roles?.includes(allowedRole)) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
