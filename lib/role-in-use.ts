import { roleHierarchy } from "./role-hierachy";

export const roleInUse = (pathname: string, roles: string[]) => {
  return roles?.includes(pathname.split("/")[1].toUpperCase())
    ? pathname.split("/")[1]
    : roleHierarchy(roles)?.toLocaleLowerCase();
};
