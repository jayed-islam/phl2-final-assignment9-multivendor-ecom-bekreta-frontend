import ProductListView from "@/sections/product/user/view/products-list-view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products",
};

const Page = () => {
  return <ProductListView />;
};

export default Page;
