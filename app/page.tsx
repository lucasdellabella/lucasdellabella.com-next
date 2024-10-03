import { BlogPosts } from "app/components/posts";
import Link from "next/link";
import { ReactNode } from "react";

const WashiTapeHighlight = ({
  color,
  children,
  className,
}: {
  color: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative inline-block">
      <div
        className={
          "absolute -left-1 -right-1 top-1/2 -translate-y-1/2 h-full transform -rotate-1 skew-x-3 opacity-70 " +
          color +
          " " +
          className
        }
      ></div>
      <span className="relative z-10">{children}</span>
    </div>
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-8">
        Hey! I'm Lucas - an ex-YC founder and bedroom hacker originally from the
        east coast.
      </p>

      <div className="mb-8">
        <p className="mb-2">I've previously worked on:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <WashiTapeHighlight className="mr-1" color="bg-[#8260CF]">
              <Link
                href="https://www.untetherlabs.com/"
                className="transition-all py-2 px-1 hover:px-3 text-gray-800 dark:text-gray-200 underline"
              >
                Untether Labs
              </Link>
            </WashiTapeHighlight>
            <span className="text-gray-700 dark:text-gray-300">
              {"  "}- A YC backed startup working on increasing the capacity of
              the US Healthcare system through better scheduling tools.
            </span>
          </li>
          <li>
            <WashiTapeHighlight className="mr-1" color="bg-[#009DE6]">
              <Link
                href="https://www.safegraph.com/"
                className="transition-all py-2 px-1 hover:px-3 text-gray-800 dark:text-gray-200 underline"
              >
                Safegraph's
              </Link>
            </WashiTapeHighlight>
            <span className="text-gray-700 dark:text-gray-300">
              {"  "}
              Data Marketplace team - Helping customers find the needle in the
              haystack of Safegraph's data
            </span>
          </li>
          <li>
            <WashiTapeHighlight className="mr-1" color="bg-[#D71615]">
              <Link
                href="https://www.yelp.com"
                className="transition-all py-2 px-1 hover:px-3 text-gray-800 dark:text-gray-200 underline"
              >
                Yelp's
              </Link>
            </WashiTapeHighlight>
            <span className="text-gray-700 dark:text-gray-300">
              {"  "}
              'Connect' product - A tool to help restaurant owners market to
              locals inside yelp via photo & video.
            </span>
          </li>
          <li>
            <WashiTapeHighlight className="mr-1" color="bg-[#A9AAAB]">
              <Link
                href="https://www.apple.com/"
                className="transition-all py-2 px-1 hover:px-3 text-gray-800 dark:text-gray-200 underline"
              >
                Apple's
              </Link>
            </WashiTapeHighlight>
            <span className="text-gray-700 dark:text-gray-300">
              {"  "}
              iTunes backend - building internal tools for metadata management
            </span>
          </li>
        </ul>
      </div>

      <p className="mb-4 group">
        Hit me up at{" "}
        <Link
          className="transition-all py-2 px-1 hover:px-3 outline-white hover:outline-gray-600 hover:outline dark:outline-black dark:hover:outline-gray-400 dark:hover:outline text-gray-800 dark:text-gray-200 underline"
          href="mailto:dellabella.lucas@gmail.com"
        >
          dellabella.lucas@gmail.com
        </Link>
        <span className="group-hover:hidden">.</span> <br></br>If you like my
        work, please,{" "}
        <span className="text-lg inline-block animate-bounce">👆</span> say hi!
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
