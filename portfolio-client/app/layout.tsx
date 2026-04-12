import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

import AnimatedCursor from "react-animated-cursor";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
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
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="40, 233, 140"
          outerAlpha={0.3}
          innerScale={1}
          outerScale={1.5} // 👈 slight grow = clickable feel
          clickables={["a", "button", ".cursor-pointer"]}
        /> */}
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="     ">
            {/* <main className="container mx-auto max-w-7xl   flex-grow"> */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
