import { formatDate, getBlogPosts } from "app/blog/utils";
import Link from "next/link";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 -mx-2 py-2 hover:-mx-4 hover:px-2 transition-all outline-white hover:outline-gray-600 hover:outline dark:outline-black dark:hover:outline-gray-400 dark:hover:outline hover:text-neutral-800 dark:hover:text-neutral-200"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0">
              <p className="text-neutral-600 dark:text-neutral-400 min-w-[150px] w-[150px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight truncate">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
