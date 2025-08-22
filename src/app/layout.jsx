import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeProviderWrapper from "../../ThemeProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zytronic Assessment",
  description: "Developed By Shady Medhat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <ThemeProviderWrapper>
        <Navbar/>
           <AppRouterCacheProvider>

        {children}
        </AppRouterCacheProvider>
            </ThemeProviderWrapper>
      </body>
    </html>
  );
}
