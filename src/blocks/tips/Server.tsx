import TipsSection from "@/components/sections/TipsSection";
import React from "react";

export type TipsType = {
  scroll: string;
  title: string;
  sub: string;
  tips: [{ category: string; tip: [{ advice: string }] }];
};

const TipsServer = (props: TipsType) => {
  return (
    <TipsSection
      title={props.title}
      tips={props.tips}
      sub={props.sub}
      scroll={props.scroll}
    />
  );
};

export default TipsServer;
