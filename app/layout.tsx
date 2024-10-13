import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import "./global.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Hi, I'm Lucas",
    template: "%s | Hi, I'm Lucas",
  },
  description: "Projects, thoughts, and other artifacts.",
  openGraph: {
    title: "Hi, I'm Lucas",
    description: "Projects, thoughts, and other artifacts.",
    url: baseUrl,
    siteName: "lucasdellabella.com",
    locale: "en_US",
    type: "website",
  },
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
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "relative text-black bg-gray-50 dark:text-white dark:bg-gray-950 h-full w-full",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      {/* Background pattern */}
      <div className="dark:hidden absolute inset-0 -z-10 h-full w-full bg-gray-50 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]"></div>
      </div>
      <div className="hidden dark:block absolute inset-0 -z-10 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]"></div>
      </div>

      {/* App */}
      <body className="antialiased max-w-xl px-4 md:mx-auto w-full">
        <main className="flex-auto min-w-0 pt-6 flex flex-col min-h-screen px-2 md:px-0">
          <Navbar />
          <div className="grow">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
