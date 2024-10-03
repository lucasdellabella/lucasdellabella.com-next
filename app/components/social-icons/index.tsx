import HoverEffect from "../ui/hover-effect";
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
    <HoverEffect>
      <a
        className="text-sm text-gray-700 dark:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`fill-current text-text hover:text-pink h-${size} w-${size}`}
        />
      </a>
    </HoverEffect>
  );
};

export default SocialIcon;
