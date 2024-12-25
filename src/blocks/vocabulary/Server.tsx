import Vocabulary from "@/components/sections/Vocabulary";
import React from "react";

export type VocabularyServerProps = {
  scroll: string;
  title: string;
  advices: [{ advice: string }];
};

const VocabularyServer = (props: VocabularyServerProps) => {
  return (
    <Vocabulary
      scroll={props.scroll}
      advices={props.advices}
      title={props.title}
    />
  );
};

export default VocabularyServer;
