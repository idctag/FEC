import TestSection from "@/components/sections/TestSection";
import React from "react";

export type TestTypes = {
  scroll: string;
  links: [{ title: string; link: string }];
  title: string;
  desc: string;
};

const TestServer = (props: TestTypes) => {
  return (
    <TestSection
      title={props.title}
      desc={props.desc}
      scroll={props.scroll}
      links={props.links}
    />
  );
};

export default TestServer;
