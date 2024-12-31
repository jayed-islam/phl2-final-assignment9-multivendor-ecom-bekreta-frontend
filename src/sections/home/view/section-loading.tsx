import ProductCardShimmer from "@/layouts/common/product-shimmer-card";
import React from "react";

const ProductLoadingSection = () => {
  return (
    <section className="px-5 2xl:px-0 max-w-5xl mx-auto pt-11  md:pt-16 lg:pt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardShimmer key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductLoadingSection;
