import "./globals.css";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet",
  description: "Social Media website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex min-h-screen flex-col bg-[#fcfcfc] text-black dark:bg-[#0e0e0e] dark:text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
