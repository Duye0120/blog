import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "我的技术博客 | 前端开发分享",
  description: "探索前端开发的无限可能，分享 React、TypeScript、Next.js 等现代技术栈的实践经验和技术心得",
  keywords: "前端开发, React, TypeScript, Next.js, JavaScript, Web开发, 技术博客",
  authors: [{ name: "博客作者" }],
  openGraph: {
    title: "我的技术博客",
    description: "探索前端开发的无限可能，分享现代技术栈的实践经验",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "我的技术博客",
    description: "探索前端开发的无限可能，分享现代技术栈的实践经验",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
