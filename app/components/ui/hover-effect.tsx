import { ReactNode } from "react";

const HoverEffect = ({ children }: { children: ReactNode }) => {
  return (
    <div className="transition-all outline-neutral-50 dark:outline-neutral-950 hover:outline-gray-600 outline-1 dark:outline-black dark:hover:outline-gray-400 dark:hover:outline hover:text-neutral-800 dark:hover:text-neutral-200 py-2 my-1 mx-3 hover:mx-1 hover:px-2">
      {children}
    </div>
  );
};

export default HoverEffect;
