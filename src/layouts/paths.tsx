export const paths = {
  root: "/",
  signin: "/auth/signin",
  signup: "/auth/signup",
  success: "/success",
  admin: {
    root: "/admin",
    products: "/admin/products",
    reviews: "/admin/reviews",
    vendors: "/admin/vendors",
    users: "/admin/users",
  },
  account: {
    root: "/account",
    orders: "/account/orders",
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
    product: {
      root: "/vendor/products",
      create: "/vendor/products/create",
    },
  },
};
