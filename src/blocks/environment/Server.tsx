import Environment from "@/components/sections/Environment";
import { Media } from "@/payload-types";
import React from "react";

export type EnvironmentProps = {
  image: Media;
  title: string;
  subtitle: string;
  desc: string;
};

const EnvironmentServer = ({
  image,
  title,
  subtitle,
  desc,
}: EnvironmentProps) => {
  return (
    <Environment desc={desc} image={image} title={title} subtitle={subtitle} />
  );
};

export default EnvironmentServer;
