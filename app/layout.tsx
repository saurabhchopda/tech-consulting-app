import type React from "react";
import "@/styles/globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Quantix - Technology Consulting & Digital Transformation",
  description:
    "Expert technology consulting services that drive digital transformation, optimize operations, and accelerate business growth. Transform your business with Quantix.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
