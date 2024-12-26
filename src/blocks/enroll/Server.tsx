import EnrollSection from "@/components/sections/EnrollSection";
import React from "react";

export type EnrollProps = {
  title: string;
  link: string;
  sub: string;
};

const EnrollServer = ({ title, link, sub }: EnrollProps) => {
  return <EnrollSection sub={sub} title={title} link={link} />;
};

export default EnrollServer;
