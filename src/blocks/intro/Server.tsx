import Intro from "@/components/sections/Intro";
import { Media } from "@/payload-types";
import React from "react";

type Feature = {
  title: string;
  desc: string;
};

export type IntroType = {
  title: string;
  img: Media;
  paragraph: string;
  features: Feature[];
};

const IntroServer = (props: IntroType) => {
  return (
    <Intro
      features={props.features}
      paragraph={props.paragraph}
      img={props.img}
      title={props.title}
    />
  );
};

export default IntroServer;
