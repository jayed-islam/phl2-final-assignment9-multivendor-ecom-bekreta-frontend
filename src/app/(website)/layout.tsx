import MainLayout from "@/layouts/main";
import CartDrawer from "@/sections/cart/view/cart-drawer-view";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <MainLayout>
      <CartDrawer />
      {children}
    </MainLayout>
  );
};

export default Layout;
