import { AuthGuard } from "@/auth/guard/auth-guard";
import { PermissionGuard } from "@/auth/guard/permission-guard";
import PermissionStatusGuard from "@/auth/guard/permission-status-guard";
import { USER_ROLE } from "@/types/user";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <AuthGuard>
      <PermissionGuard hasContent roles={[USER_ROLE.customer]}>
        <PermissionStatusGuard hasContent>{children}</PermissionStatusGuard>
      </PermissionGuard>
    </AuthGuard>
  );
};

export default Layout;
