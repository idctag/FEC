import Hero from "@/components/sections/Hero";
import { Media } from "@/payload-types";

export type Advantage = {
  title: string;
  sub: string;
  image: Media;
};

export type HeroProps = {
  title: string;
  subtitle: string;
  advantage: Advantage[];
  scroll: string;
};

const HeroServer = ({ title, subtitle, advantage, scroll }: HeroProps) => {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      advantage={advantage}
      scroll={scroll}
    />
  );
};

export default HeroServer;
