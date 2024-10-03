import SocialIcon from "./social-icons";

const SocialIconContainer = () => {
  return (
    <div className="flex space-x-1 -ml-2 px-1">
      <SocialIcon kind="twitter" href="https://twitter.com/fiveeels" />
      <SocialIcon
        kind="linkedin"
        href="https://linkedin.com/in/lucasdellabella"
      />
      <SocialIcon kind="github" href="https://github.com/lucasdellabella" />
    </div>
  );
};

export default SocialIconContainer;
