"use client";
import { LogosType } from "@/blocks/logo/Server";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Card = ({ img }: { img: string }) => {
  return (
    <div className="py-4 px-12 rounded-xl bg-gray-50">
      <div className="relative overflow-hidden h-[50px] min-w-[50px] md:h-[100px] md:min-w-[100px] flex items-center justify-center">
        <Image priority src={img} alt="" fill sizes="auto" />
      </div>
    </div>
  );
};

const LogoTicker = ({ slider, title }: LogosType) => {
  return (
    <div className="text-center flex flex-col gap-14 my-20">
      <h1 className="text-[3rem] md:text-[4rem] font-semibold bg-gradient-to-r bg-clip-text text-transparent from-[#1C00EE] to-[#CC00FF]">
        {title}
      </h1>
      <Marquee speed={50} gradient autoFill>
        {slider.map((item, idx) => (
          <div key={idx} className="px-2 md:px-10">
            <Card img={item.logo.url!} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoTicker;
