import HomeView from "@/sections/home/view/home-view";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "IQA - ইসলামী প্রশ্নোত্তর",
};

const Page = () => {
  return <HomeView />;
};

export default Page;
