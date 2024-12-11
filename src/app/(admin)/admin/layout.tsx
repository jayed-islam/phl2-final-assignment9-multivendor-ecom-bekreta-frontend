import { AuthGuard } from "@/auth/guard/auth-guard";
import { PermissionGuard } from "@/auth/guard/permission-guard";
import PermissionStatusGuard from "@/auth/guard/permission-status-guard";
import DashboardLayout from "@/layouts/dashboard";
import { USER_ROLE } from "@/types/user";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const VendorLayout = ({ children }: Props) => {
  return (
    <AuthGuard>
      <PermissionGuard hasContent roles={[USER_ROLE.admin]}>
        <PermissionStatusGuard hasContent>
          <DashboardLayout>{children}</DashboardLayout>
        </PermissionStatusGuard>
      </PermissionGuard>
    </AuthGuard>
  );
};

export default VendorLayout;
