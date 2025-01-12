import EnrollSection from "@/components/sections/EnrollSection";
import React from "react";

export type EnrollProps = {
  title: string;
  link: string;
  sub: string;
  scroll: string;
};

const EnrollServer = ({ title, link, sub, scroll }: EnrollProps) => {
  return <EnrollSection sub={sub} title={title} link={link} scroll={scroll} />;
};

export default EnrollServer;
