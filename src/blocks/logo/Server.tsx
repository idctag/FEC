import { Media } from "@/payload-types";
import React from "react";
import LogoTicker from "@/components/sections/LogoTicker";

export type Logo = {
  logo: Media;
};

export type LogosType = {
  slider: Logo[];
  title: string;
  direction: "right" | "left";
};

const LogosServer = ({ slider, title, direction }: LogosType) => {
  return (
    <div className="w-full overflow-hidden">
      <LogoTicker slider={slider} direction={direction} title={title} />
    </div>
  );
};

export default LogosServer;
