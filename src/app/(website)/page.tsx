import HomeView from "@/sections/home/view/home-view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bekreta",
};

const Page = () => {
  return <HomeView />;
};

export default Page;
