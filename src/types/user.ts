export const USER_ROLE = {
  customer: "customer",
  admin: "admin",
  vendor: "vendor",
} as const;

export type UserRoles = (typeof USER_ROLE)[keyof typeof USER_ROLE];
