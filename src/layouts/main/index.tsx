import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import TopHeader from "@/components/elements/top-header";
import ScrollToTopButton from "./scroll-to-top-button";
import DesktopMenu from "./head-mega-menu";
import HeadMegaMenu2 from "./menu";
import HeadMegaMenu3 from "./new-menu-1";
import HeadMegaMenu4 from "./new-menu-2";
import HeadMegaMenu5 from "./new-menu-3";
import HeadMegaMenu6 from "./new-menu-4";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <TopHeader />
      <Header />
      <HeadMegaMenu6 />
      <HeadMegaMenu5 />
      <HeadMegaMenu4 />
      <HeadMegaMenu3 />
      <HeadMegaMenu2 />
      <DesktopMenu />
      <ScrollToTopButton />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
