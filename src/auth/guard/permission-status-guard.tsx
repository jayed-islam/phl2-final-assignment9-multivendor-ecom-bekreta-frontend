"use client";

import React, { FC } from "react";
import { Button, Container, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { paths } from "@/layouts/paths";
import { logout } from "@/redux/reducers/auth/authSlice";
import { useRouter } from "next/navigation";

type PermissionGuardProps = {
  hasContent?: boolean;
  children: React.ReactNode;
};

export const PermissionStatusGuard: FC<PermissionGuardProps> = ({
  hasContent,
  children,
}) => {
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push(paths.root);
  };

  //   const userRole = user?.role;

  //   const isPermitted =
  //     userRole && (userRole === "admin" || roles.includes(userRole));

  const isRestricted =
    (user?.role === "customer" &&
      (user.status === "suspended" || user.status === "blocked")) ||
    (user?.role === "vendor" && user.vendor?.isBlacklisted);

  //   useEffect(() => {
  //     // If user is restricted, call logout
  //     if (isRestricted) {
  //       handleLogout();
  //     }
  //   }, [isRestricted]);

  if (isRestricted) {
    const message =
      user?.role === "vendor" && user.vendor?.isBlacklisted
        ? "Your account as a vendor is blocked. Please contact support."
        : "Permission Denied. Your account is either suspended or blocked.";

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
          Access Denied
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>{message}</Typography>
        <Link href={paths.root} onClick={handleLogout}>
          <Button>Go Back and Logout</Button>
        </Link>
      </Container>
    ) : null;
  }

  return <>{children}</>;
};

export default PermissionStatusGuard;
