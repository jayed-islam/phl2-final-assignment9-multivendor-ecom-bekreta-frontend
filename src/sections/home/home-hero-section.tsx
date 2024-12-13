import React from "react";
import banner from "../../../public/banner.jpg";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/layouts/paths";

const HomeHeroSection = () => {
  return (
    <div className="max-w-5xl mx-auto mt-5">
      <Link href={paths.product.root}>
        <Image
          src={banner}
          alt="Hero Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Link>
    </div>
  );
};

export default HomeHeroSection;
