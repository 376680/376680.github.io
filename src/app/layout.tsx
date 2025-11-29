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
  // 基本信息
  title: {
    template: "%s - 小鼠帝国政府网",
    default: "小鼠帝国政府网 - 官方政府门户网站",
  },
  description: "小鼠帝国政府官方网站，为所有帝国公民提供便捷的政府服务信息和在线办理。包括帝国通行证、基础奶酪保障、税务申报等服务。",
  keywords: ["小鼠帝国", "政府服务", "帝国通行证", "奶酪保障", "税务申报", "公民服务", "移民入籍", "福利申请"],
  authors: [{ name: "小鼠帝国政府", url: "https://376680.github.io" }],
  publisher: "小鼠帝国政府",
  
  // 图标配置
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  
  // 搜索引擎优化
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // 视口设置
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  
  // 开放图谱
  openGraph: {
    title: "小鼠帝国政府网",
    description: "官方政府门户网站 - 让政府服务更易于查找",
    type: "website",
    url: "https://376680.github.io",
    siteName: "小鼠帝国政府网",
    locale: "zh_CN",
  },
  
  // Twitter 卡片
  twitter: {
    card: "summary_large_image",
    title: "小鼠帝国政府网",
    description: "官方政府门户网站 - 让政府服务更易于查找",
    creator: "@mouse_empire",
  },
  
  // 其他元标签
  applicationName: "小鼠帝国政府网",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: "#1e40af",
  colorScheme: "light",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* 结构化数据 - 政府网站 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              "name": "小鼠帝国政府",
              "url": "https://376680.github.io",
              "logo": "https://376680.github.io/logo.svg",
              "description": "小鼠帝国政府官方网站，为所有帝国公民提供便捷的政府服务信息和在线办理。",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "123",
                "contactType": "customer service",
                "email": "empire@mouse.gov"
              },
              "sameAs": [
                "https://376680.github.io"
              ]
            })
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
