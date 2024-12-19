import Environment from "@/components/sections/Environment";
import { Media } from "@/payload-types";
import React from "react";

export type EnvironmentProps = {
  image: Media;
  title: string;
  subtitle: string;
};

const EnvironmentServer = ({ image, title, subtitle }: EnvironmentProps) => {
  return <Environment image={image} title={title} subtitle={subtitle} />;
};

export default EnvironmentServer;
