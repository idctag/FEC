"use client";
import { IntroType } from "@/blocks/intro/Server";
import Image from "next/image";
import React from "react";

const Intro = (props: IntroType) => {
  const { title, paragraph, img } = props;
  return (
    <div className="size-full flex flex-col items-center max-w-screen-2xl md:p-4 gap-24 my-12">
      {/* TOP SECTION */}
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-[40px] font-semibold  max-w-[800px]">{title}</p>
        <div className="h-1 w-[20rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
        <p className="text-[1.3rem] mt-4">{paragraph}</p>
      </div>
      {/* BOTTOM SECTION */}
      <div className="flex flex-col 2xl:flex-row gap-12">
        <div className="bg-primary/30 px-12 pt-12 rounded-3xl">
          <Image src={img.url!} alt="" height={600} width={500} />
        </div>
        <div className="2xl:w-1/2 flex px-4 flex-col gap-12">
          <div>
            <p className="text-pink-400 text-[1rem] 2xl:text-[1.5rem]">
              Teacher
            </p>
            <p className="text-[2.5rem] 2xl:text-[3rem] font-semibold">
              10+ years Experience, University of Philippines
            </p>
          </div>

          <p className="text-[2rem] text-gray-500 relative">
            &ldquo; I have taught English in many countries before, and I
            can&#39;t find children who learn quickly and effectively in a short
            time like these Mongolian children. &ldquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
