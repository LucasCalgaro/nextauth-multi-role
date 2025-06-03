"use server";

import { currentRoles } from "@/lib/auth";

export const user = async () => {
  const roles = await currentRoles();

  if (roles?.includes("USER")) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
