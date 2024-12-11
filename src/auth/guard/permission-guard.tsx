"use client";

import React, { FC } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import { UserRoles } from "@/types/user";
import Link from "next/link";
import { paths } from "@/layouts/paths";

type PermissionGuardProp = {
  hasContent?: boolean;
  roles: UserRoles[];
  children: React.ReactNode;
};

export const PermissionGuard: FC<PermissionGuardProp> = ({
  hasContent,
  roles,
  children,
}) => {
  const { user } = useAppSelector((state) => state.auth);

  const isPermitted =
    user?.role === "admin" || roles.some((role) => user?.role === role);

  if (!isPermitted) {
    return hasContent ? (
      <Container
        sx={{
          textAlign: "center",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "51vh",
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Permission Denied
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          You do not have permission to access this page
        </Typography>
        <Link href={paths.root}>
          <Button>Go Back</Button>
        </Link>
      </Container>
    ) : null;
  }

  return <>{children}</>;
};

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 12 }}
    >
      &copy; {currentYear}. All rights reserved.
    </Typography>
  );
};

export default Footer;
