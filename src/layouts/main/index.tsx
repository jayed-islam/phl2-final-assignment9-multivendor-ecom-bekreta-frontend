import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import TopHeader from "@/components/elements/top-header";
import ScrollToTopButton from "./scroll-to-top-button";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <TopHeader />
      <Header />
      <ScrollToTopButton />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
