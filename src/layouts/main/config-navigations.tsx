import { paths } from "../paths";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";

export const navConfs = [
  {
    title: "Compaire",
    path: paths.comparisonProduct,
  },
  {
    title: "Recent Viewed",
    path: paths.product.recent,
  },
];

export const footerNavConfs = [
  {
    title: "বিভাগ সমূহ",
    path: paths.root,
  },
  {
    title: "আমাদের সম্পর্কে",
    path: paths.root,
    children: [],
  },
  {
    title: "দান করুন",
    path: paths.root,
    children: [],
  },
  {
    title: "যোগাযোগ",
    path: paths.root,
  },
  {
    title: "প্রাইভেসি এবং টার্মস",
    path: paths.root,
    children: [],
  },
];

export const userNavConfs = [
  {
    title: "My Info",
    path: paths.account.orders,
    icon: <InfoIcon />,
  },
  {
    title: "My Orders",
    path: paths.account.orders,
    icon: <AccountCircleIcon />,
  },
];
