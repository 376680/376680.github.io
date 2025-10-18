import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "小鼠帝国政府网 - 官方政府门户网站",
  description: "小鼠帝国政府官方网站，为所有帝国公民提供便捷的政府服务信息和在线办理。包括帝国通行证、基础奶酪保障、税务申报等服务。",
  keywords: ["小鼠帝国", "政府服务", "帝国通行证", "奶酪保障", "税务申报", "公民服务"],
  authors: [{ name: "小鼠帝国政府" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "小鼠帝国政府网",
    description: "官方政府门户网站 - 让政府服务更易于查找",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "小鼠帝国政府网",
    description: "官方政府门户网站 - 让政府服务更易于查找",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
