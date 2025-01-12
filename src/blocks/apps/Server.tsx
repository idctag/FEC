import AppsComponent from "@/components/sections/Apps";
import { Media } from "@/payload-types";
import React from "react";

export type Apps = {
  title: string;
  desc: string;
  img: Media;
  color: "red" | "green" | "blue" | "purple" | "orange" | "pink";
};

export type AppsSection = {
  title: string;
  apps: Apps[];
  scroll: string;
};

const AppsServer = (props: AppsSection) => {
  return (
    <AppsComponent
      scroll={props.scroll}
      title={props.title}
      apps={props.apps}
    />
  );
};

export default AppsServer;
