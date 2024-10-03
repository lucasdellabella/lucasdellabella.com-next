import { BlogPosts } from "app/components/posts";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        Hey! I'm Lucas - an ex-YC founder and bedroom hacker originally from the
        east coast.
      </p>

      <p className="">I've previously worked on:</p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <Link
            href="https://www.untetherlabs.com/"
            className="text-gray-600 underline"
          >
            Untether Labs
          </Link>
          <span className="text-gray-700 dark:text-gray-300">
            {" "}
            - A YC backed startup working on increasing the capacity of the US
            Healthcare system through better scheduling tools.
          </span>
        </li>
        <li>
          <Link
            href="https://www.safegraph.com/"
            className="text-gray-600 underline"
          >
            Safegraph
          </Link>
          <span className="text-gray-700 dark:text-gray-300">
            's Data Marketplace team - Helping customers find the needle in the
            haystack of Safegraph's data
          </span>
        </li>
        <li>
          <Link href="https://www.yelp.com" className="text-gray-600 underline">
            Yelp
          </Link>
          <span className="text-gray-700 dark:text-gray-300">
            's 'Connect' product - A tool to help restaurant owners market to
            locals inside yelp via photo & video.
          </span>
        </li>
      </ul>

      <p className="mb-4">
        Hit me up at{" "}
        <a
          href="mailto:dellabella.lucas@gmail.com"
          className="text-gray-600 underline"
        >
          dellabella.lucas@gmail.com
        </a>
        . <br></br>If you like my work, please,{" "}
        <span className="text-lg inline-block animate-bounce">👆</span> say hi!
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
