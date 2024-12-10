/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  useGetSingleVendorQuery,
  useToggleFollowUnfollwVendorMutation,
} from "@/redux/reducers/vendor/vendorApi";
import { Button, Typography, Avatar, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/layouts/paths";
import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";

interface Props {
  id: string;
}

const ShopProfileView = ({ id }: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const { data: vendorData, isLoading: isVendorLoading } =
    useGetSingleVendorQuery(id);
  const [toggleFollowUnfollow, { isLoading }] =
    useToggleFollowUnfollwVendorMutation();

  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (vendorData?.data) {
      const isUserFollowing = vendorData.data.followers?.some(
        (follower: any) => follower === user?._id
      );
      setIsFollowing(isUserFollowing);
    }
  }, [user?._id, vendorData]);

  // Handle follow/unfollow action
  const handleFollowUnfollow = async () => {
    setIsFollowing((prevState) => !prevState);
    try {
      const response = await toggleFollowUnfollow(id).unwrap();
      if (response.success) {
        toast.success(
          !isFollowing
            ? "You are now following the vendor!"
            : "You have unfollowed the vendor."
        );
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (isVendorLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-8 2xl:px-0">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {vendorData?.data?.shopName ?? "Shop"}
      </Typography>

      {/* Vendor Description Section */}
      <div className="flex items-start flex-col md:flex-row gap-5">
        <Avatar
          src={
            vendorData?.data.logo ||
            "https://via.placeholder.com/150x150?text=Shop+Logo"
          }
          alt={vendorData?.data?.shopName}
          sx={{ width: 100, height: 100, marginRight: 3 }}
        />
        <Box>
          <Typography variant="body1" paragraph>
            {vendorData?.data.description || "No description available."}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Followers: {vendorData?.data?.followers?.length}
          </Typography>
        </Box>
        {/* Follow/Unfollow Button */}
        <Button
          sx={{ marginLeft: 2 }}
          onClick={handleFollowUnfollow}
          disabled={isLoading}
          variant="contained"
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </div>

      {/* Products Section */}
      <Typography variant="h4" fontWeight="bold" mt="3rem" mb="2rem">
        Products from {vendorData?.data?.shopName ?? "Shop"}
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {vendorData?.data.products?.map((product) => (
          <Link
            href={`${paths.product.root}/${product._id}`}
            key={product._id}
            className="bg-white shadow border rounded-3xl flex flex-col items-center justify-center"
          >
            <div className="relative w-full md:h-48 h-40 lg:h-56 bg-gray-100 rounded-3xl overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
                height={500}
                width={500}
              />
            </div>
            <div className="flex flex-col items-center justify-center p-3">
              <h3 className="text-md font-semibold line-clamp-1 overflow-ellipsis text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                //   onClick={() => handleAddToCart(product)}
                sx={{ marginTop: 2 }}
              >
                Add to Cart
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopProfileView;
