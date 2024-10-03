import SocialIcon from "./social-icons";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <div className="h-0.5 bg-gradient-to-r from-transparent dark:via-gray-600 via-gray-300 to-transparent"></div>
      <footer className="mt-4 mb-4 flex justify-around">
        <div className="flex space-x-1 -ml-2">
          <SocialIcon kind="twitter" href="https://twitter.com/fiveeels" />
          <SocialIcon
            kind="linkedin"
            href="https://linkedin.com/in/lucasdellabella"
          />
          <SocialIcon kind="github" href="https://github.com/lucasdellabella" />
        </div>
        <p className="text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} MIT Licensed
        </p>
      </footer>
    </>
  );
}
