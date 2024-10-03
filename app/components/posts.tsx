import { formatDate, getBlogPosts } from "app/blog/utils";
import Link from "next/link";
import HoverEffect from "./ui/hover-effect";

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
          <div className="-mx-3">
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 overflow-hidden"
              href={`/blog/${post.slug}`}
            >
              <HoverEffect>
                <div className="w-full flex flex-col md:flex-row space-x-0">
                  <p className="text-neutral-600 dark:text-neutral-400 min-w-[150px] w-[150px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight truncate">
                    {post.metadata.title}
                  </p>
                </div>
              </HoverEffect>
            </Link>
          </div>
        ))}
    </div>
  );
}
