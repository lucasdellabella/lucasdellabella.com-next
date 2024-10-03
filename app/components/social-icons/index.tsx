import {
  Exercism,
  Github,
  Keyoxide,
  Linkedin,
  Mail,
  Mastodon,
  Orcid,
  RSSIcon,
  Twitter,
  Youtube,
} from "./icons";

const components = {
  mail: Mail,
  github: Github,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
  orcid: Orcid,
  exercism: Exercism,
  rss_icon: RSSIcon,
  keyoxide: Keyoxide,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-700 dark:text-gray-300 transition-all py-2 mx-2 hover:mx-0 hover:p-2 outline-white hover:outline-gray-600 hover:outline dark:outline-black dark:hover:outline-gray-400 dark:hover:outline"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-text hover:text-pink h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
