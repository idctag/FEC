import { Media } from "@/payload-types";
import React from "react";
import Image from "next/image";

type Logo = {
  logo: Media;
};

type LogosType = {
  slider: Logo[];
};

const Card = ({ img }: { img: string }) => {
  return (
    <div className="relative overflow-hidden h-[200px] min-w-[200px] bg-gray-200 p-4 rounded-xl flex items-center justify-center">
      <Image src={img} alt="" fill sizes="auto" />
    </div>
  );
};

const LogosServer = ({ slider }: LogosType) => {
  return (
    <main className="py-8 size-full">
      <div className="flex left-0 gap-4">
        {slider.map((item, idx) => (
          <div key={idx}>
            <Card img={item.logo.url!} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default LogosServer;
