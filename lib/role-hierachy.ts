export const roleHierarchy = (roles: string[]) => {
  if (roles.includes("ADMIN")) {
    return "ADMIN";
  }

  if (roles.includes("USER")) {
    return "USER";
  }

  return null;
};
