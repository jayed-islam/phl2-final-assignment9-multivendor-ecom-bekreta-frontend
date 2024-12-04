import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans_Bengali } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import MuiThemeProvider from "@/theme/MuiThemeProvider";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ইসলামী প্রশ্নোত্তর",
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
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
