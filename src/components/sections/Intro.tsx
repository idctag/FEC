"use client";
import { IntroType } from "@/blocks/intro/Server";
import Image from "next/image";
import React from "react";

const Intro = (props: IntroType) => {
  const { title, paragraph, img } = props;
  return (
    <div className="size-full flex flex-col items-center md:p-4 gap-24 my-12">
      {/* TOP SECTION */}
      <div className="flex flex-col gap-2">
        <p className="text-[40px] font-semibold text-center max-w-[800px]">
          {title}
        </p>
        <div className="h-1 w-[20rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>

      <div className="size-full relative max-w-bigscrn flex flex-col items-center justify-center">
        <Image
          src={img.url!}
          alt=""
          className="rounded-t-3xl"
          height={1100}
          width={1100}
        />
        <div className="absolute max-w-[1100px] text-center text-[1.5rem] p-6 rounded-3xl text-white bg-black/50">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default Intro;
