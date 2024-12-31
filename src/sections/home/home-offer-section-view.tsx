import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  isFetching: boolean;
  products: IProduct[];
}

const HomeOfferSection: React.FC<Props> = ({ products }) => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="max-w-5xl mx-auto px-5 2xl:px-0">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Exclusive Offers for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((offer, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={offer.images[0]}
                alt={offer.name}
                className="w-full h-60 object-cover"
                height={500}
                width={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {offer.name}
                </h3>
                <p className="text-white/90 mb-4">{offer.description}</p>
                <Link
                  href=""
                  className="self-start px-5 py-2 text-sm font-medium text-white rounded hover:bg-green-700 bg-green-500 transition-colors"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOfferSection;
