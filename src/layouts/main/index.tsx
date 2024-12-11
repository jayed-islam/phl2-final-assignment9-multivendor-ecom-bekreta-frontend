import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import TopHeader from "@/components/elements/top-header";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <TopHeader />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
