import FlashSaleProductListView from "@/sections/product/user/view/flash-sale-products-list-view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Flash Sale Products",
};

const Page = () => {
  return <FlashSaleProductListView />;
};

export default Page;
