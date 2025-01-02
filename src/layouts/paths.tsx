export const paths = {
  root: "/",
  signin: "/auth/signin",
  signup: "/auth/signup",
  forgetPassword: "/auth/forgot-password",
  comparisonProduct: "/comparison-product",

  success: "/success",
  admin: {
    root: "/admin",
    profile: "/admin/profile",
    products: "/admin/products",
    reviews: "/admin/reviews",
    vendors: "/admin/vendors",
    users: "/admin/users",
    categories: "/admin/categories",
    transactions: "/admin/transactions",
  },
  account: {
    root: "/account",
    orders: "/account/orders",
    changePassword: "/account/change-password",
    myReviews: "/account/my-reviews",
  },
  cart: {
    root: "/carts",
  },
  checkout: {
    root: "/checkout",
  },
  product: {
    root: "/products",
    flashSale: "/flash-sale",
    recent: "/recent-viewed",
  },
  vendor: {
    root: "/vendor",
    allVendors: "/all-vendors",
    profile: "/vendor/profile",
    product: {
      root: "/vendor/products",
      create: "/vendor/products/create",
    },
  },
};
