import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import MuiThemeProvider from "@/theme/MuiThemeProvider";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { Toaster } from "react-hot-toast";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bekreta",
  // description: "As-Salamu Alaikum from ইসলামী প্রশ্নোত্তর.",
  icons: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansBengali.className} antialiased`}>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <ReduxProvider>
              <Toaster />
              {children}
            </ReduxProvider>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
