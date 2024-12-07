import ShopProfileView from "@/sections/product/vendor/view/shop-profile-view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shop",
};
interface Props {
  params: {
    id: string;
  };
}

const Page = ({ params }: Props) => {
  const { id } = params;
  return <ShopProfileView id={id} />;
};

export default Page;
