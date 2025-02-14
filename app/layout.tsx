import "@/styles/globals.css";
import { JetBrains_Mono as JetBrainMono } from "next/font/google";
import { Metadata } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";

const inter = JetBrainMono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Find Your Valentine",
  description: "Find your perfect match this Valentine's Day! Share your social media handle and discover who could be your special someone.",
  openGraph: {
    title: "Find Your Valentine",
    description: "Find your perfect match this Valentine's Day! Share your social media handle and discover who could be your special someone.",
    images: [{
      url: "/valentines.jpeg",
      width: 250,
      height: 250,
      alt: "Valentine's Day"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Valentine",
    description: "Find your perfect match this Valentine's Day! Share your social media handle and discover who could be your special someone.",
    images: ["/valentines.jpeg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script defer src="https://analytics.subhashh.tech/script.js" data-website-id="7d20511b-8e5d-4f96-a76b-2cd6e356cf7e"></script>
      </head>
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans`}
      >
        <Providers>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
