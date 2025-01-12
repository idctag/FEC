"use client";
import { IntroType } from "@/blocks/intro/Server";
import Image from "next/image";
import React from "react";
import background1 from "@/../public/background1.json";
import Lottie from "lottie-react";

const Intro = (props: IntroType) => {
  const { title, paragraph, img, desc, experience, work, scroll } = props;
  return (
    <div
      id={scroll}
      className="size-full flex flex-col items-center max-w-screen-2xl md:p-4 gap-24 my-12"
    >
      {/* TOP SECTION */}
      <div className="flex flex-col items-center text-center gap-2">
        <p className="text-[40px] font-semibold  max-w-[800px]">{title}</p>
        <div className="h-1 w-[20rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
        <p className="text-[1.3rem] mt-4">{paragraph}</p>
      </div>
      {/* BOTTOM SECTION */}
      <div className="flex flex-col 2xl:flex-row gap-12">
        <div className="2xl:w-1/2 flex relative justify-center">
          <Lottie
            className="absolute inset-0 size-full"
            animationData={background1}
          />
          <Image
            src={img.url!}
            alt=""
            className="z-10 size-auto"
            height={600}
            width={500}
          />
        </div>
        <div className="2xl:w-1/2 flex px-4 flex-col gap-12">
          <div>
            <p className="text-secondary text-[1rem] 2xl:text-[1.5rem]">
              {work}
            </p>
            <p className="text-[2rem] 2xl:text-[2.5rem] font-semibold">
              {experience}
            </p>
          </div>
          <p className="text-[1.5rem] 2xl:text-[1.8rem] text-gray-500 relative">
            &ldquo;{desc}&ldquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
