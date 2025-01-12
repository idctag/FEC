import Intro from "@/components/sections/Intro";
import { Media } from "@/payload-types";
import React from "react";

export type IntroType = {
  title: string;
  img: Media;
  paragraph: string;
  work: string;
  experience: string;
  desc: string;
  scroll: string;
};

const IntroServer = (props: IntroType) => {
  return (
    <Intro
      scroll={props.scroll}
      desc={props.desc}
      work={props.work}
      experience={props.experience}
      paragraph={props.paragraph}
      img={props.img}
      title={props.title}
    />
  );
};

export default IntroServer;
