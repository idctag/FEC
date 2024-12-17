"use client";
import { IntroType } from "@/blocks/intro/Server";
import React from "react";

const Intro = (props: IntroType) => {
  const { title, paragraph, img } = props;
  return (
    <div className="size-full flex flex-col items-center md:p-4 gap-24 my-12">
      <p className="text-[40px] font-semibold text-center max-w-[800px]">
        {title}
      </p>
      <div className="flex flex-col md:flex-row bg-orange-200 rounded-3xl max-w-screen-2xl">
        <img
          src={img.url!}
          className="w-full md:h-[700px] rounded-3xl md:min-w-[700px]"
        />
        <div className="text-center flex items-center p-4 md:p-8">
          <p className="text-[16px] md:text-[24px]">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
