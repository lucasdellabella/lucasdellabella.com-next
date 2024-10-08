import { formatDate, getBlogPosts } from "app/blog/utils";
import Link from "next/link";
import HoverEffect from "./ui/hover-effect";

function getNextFridayPlusSeven() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7;
  const nextFriday = new Date(
    today.getTime() + daysUntilFriday * 24 * 60 * 60 * 1000
  );
  const nextFridayPlusSeven = new Date(
    nextFriday.getTime() + 7 * 24 * 60 * 60 * 1000
  );
  return nextFridayPlusSeven.toISOString().split("T")[0];
}

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
          <div
            className={
              "-mx-3" +
              (post.metadata.isDraft ? " pointer-events-none opacity-50" : "")
            }
          >
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 overflow-hidden"
              href={`/blog/${post.slug}`}
            >
              <HoverEffect>
                <div className="w-full flex flex-col md:flex-row space-x-0">
                  <p className="text-neutral-600 dark:text-neutral-400 min-w-[150px] w-[150px] tabular-nums">
                    {post.metadata.isDraft
                      ? formatDate(getNextFridayPlusSeven())
                      : formatDate(post.metadata.publishedAt, false)}
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
