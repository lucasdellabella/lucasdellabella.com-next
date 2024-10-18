import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import ShadertoyDemo2 from "./components/shadertoy-demo-2";
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
      {/* App */}
      <body className="antialiased max-w-xl px-4 md:mx-auto w-full">
        <div
          className="fixed -z-[99999] -top-[10%] -left-[10%] opacity-70"
          style={{ width: "120vw", height: "120vh" }}
        >
          <ShadertoyDemo2 />
        </div>
        <main className="flex-auto min-w-0 pt-6 flex flex-col min-h-screen px-2 md:px-0">
          <Navbar />
          <div className="relative p-8">
            <div className="absolute bg-slate-50 border-slate-900 dark:bg-slate-900 dark:border-slate-50 top-0 left-0 -z-50 w-full h-full border opacity-70"></div>
            <div className="grow">{children}</div>
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
