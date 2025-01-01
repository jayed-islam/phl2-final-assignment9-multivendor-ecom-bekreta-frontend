"use client";

import React from "react";
import { useGetAllVendorsQuery } from "@/redux/reducers/vendor/vendorApi";
import { useRouter } from "next/navigation";
import { FaStore } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@mui/material";

const VendorListView = () => {
  const { data, isFetching } = useGetAllVendorsQuery();
  const router = useRouter();

  return (
    <section className="px-5 2xl:px-0 py-11">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Shop List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isFetching
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md animate-pulse"
                >
                  <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-1"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))
            : data?.data?.map((vendor) => (
                <Link href={`/shop/${vendor._id}`}>
                  <div
                    key={vendor._id}
                    className="bg-white rounded-3xl shadow border transition-shadow cursor-pointer"
                  >
                    {vendor.logo ? (
                      <img
                        src={vendor.logo}
                        alt={`${vendor?.shopName} Logo`}
                        className="w-full h-40 object-cover rounded-t-3xl"
                      />
                    ) : (
                      <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-t-3xl">
                        <FaStore className="text-gray-500 text-7xl" />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-xl font-bold truncate">
                        {vendor?.shopName ?? "Shop"}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Joined:{" "}
                        {new Date(vendor?.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Total Products: {vendor.products?.length || 0}
                      </p>
                      <Button
                        size="small"
                        onClick={() => router.push(`/shop/${vendor._id}`)}
                        variant="outlined"
                        sx={{
                          mt: 2,
                        }}
                      >
                        All Products
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default VendorListView;
