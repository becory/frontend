import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "所有捐款項目",
  description: "街口捐款",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen overflow-hidden items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <div className="flex h-screen w-full max-w-3xl flex-col items-center bg-bg-AA sm:items-start">
            <Layout
              title="所有捐款項目"
              leftNavigate={<img src="arrow-left.svg" />}
            >
              {children}
            </Layout>
          </div>
        </div>
      </body>
    </html>
  );
}
