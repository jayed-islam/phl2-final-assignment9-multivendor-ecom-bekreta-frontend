import ProductDetailsView from "@/sections/product/user/view/product-detail-view";
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
  return <ProductDetailsView id={id} />;
};

export default Page;
