"use server";

import { currentRoles } from "@/lib/auth";

export const admin = async () => {
  const roles = await currentRoles();

  if (roles?.includes("ADMIN")) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
