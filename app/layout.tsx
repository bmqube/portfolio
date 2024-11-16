import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name.full,
    template: `%s - ${siteConfig.name.full}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className=" bg-gray-900 text-gray-100 min-h-full">
            <Navbar />
            <main className="max-w-5xl mx-auto px-6">{children}</main>
            {/* <footer className="w-full flex items-center justify-center py-3">
              <Link
                className="flex items-center gap-1 text-current sticky bottom-0"
                href="https://github.com/bmqube/portfolio"
                title="Source Code"
              >
                <span className="text-default-400">
                  Source Code Available @{" "}
                  <span className="text-primary-600 dark:text-primary-200">
                    GitHub
                  </span>
                </span>
              </Link>
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
