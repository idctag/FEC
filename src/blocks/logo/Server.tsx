import { Media } from "@/payload-types";
import React from "react";
import LogoTicker from "@/components/sections/LogoTicker";

export type Logo = {
  logo: Media;
};

export type LogosType = {
  slider: Logo[];
  title: string;
};

const LogosServer = ({ slider, title }: LogosType) => {
  return (
    <div className="w-full overflow-hidden">
      <LogoTicker slider={slider} title={title} />
    </div>
  );
};

export default LogosServer;
