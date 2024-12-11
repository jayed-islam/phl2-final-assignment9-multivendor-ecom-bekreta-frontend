import { AuthGuard } from "@/auth/guard/auth-guard";
import { PermissionGuard } from "@/auth/guard/permission-guard";
import PermissionStatusGuard from "@/auth/guard/permission-status-guard";
import AccountLayout from "@/layouts/account";
import MainLayout from "@/layouts/main";
import { USER_ROLE } from "@/types/user";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <AuthGuard>
      <PermissionGuard hasContent roles={[USER_ROLE.customer]}>
        <PermissionStatusGuard hasContent>
          <MainLayout>
            <AccountLayout>{children}</AccountLayout>
          </MainLayout>
        </PermissionStatusGuard>
      </PermissionGuard>
    </AuthGuard>
  );
};

export default Layout;
