import Intro from "@/components/sections/Intro";
import { Media } from "@/payload-types";
import React from "react";

export type IntroType = {
  title: string;
  img: Media;
  paragraph: string;
};

const IntroServer = (props: IntroType) => {
  return (
    <Intro paragraph={props.paragraph} img={props.img} title={props.title} />
  );
};

export default IntroServer;
