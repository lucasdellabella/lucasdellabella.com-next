import Link from "next/link";
import SocialIconContainer from "./social-icon-container";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
  "/music": {
    name: "music",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all outline-white hover:outline-gray-600 hover:outline dark:outline-black dark:hover:outline-gray-400 dark:hover:outline hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 my-1 mx-3 hover:mx-1 hover:px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:block ml-auto">
            <SocialIconContainer />
          </div>
        </nav>
      </div>
    </aside>
  );
}
