"use client";
import { EnvironmentProps } from "@/blocks/environment/Server";
import Image from "next/image";
import React from "react";
import objects from "@/../public/objects.json";
import Lottie from "lottie-react";

const Environment = ({ image, title, subtitle, desc }: EnvironmentProps) => {
  return (
    <div className="flex gap-12 flex-col items-center relative my-20 max-w-bigscrn">
      <div>
        <div className="flex">
          <Lottie
            animationData={objects}
            className="size-[70px] left-10 2xl:size-[100px] absolute 2xl:static"
          />

          <p className="text-[2.5rem] font-semibold 2xl:text-[4rem] text-center">
            {title}
          </p>
        </div>
        <div className="h-1 w-[12rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <div className="flex flex-col 2xl:flex-row items-center md:p-12 gap-8">
        <div className="flex flex-col relative text-center 2xl:text-left gap-12 size-full 2xl:w-1/2 p-2">
          <p className="text-[1.3rem] 2xl:text-[2.5rem]">{subtitle}</p>
          <p className="2xl:text-[1.4rem] text-gray-500">{desc}</p>
        </div>
        <Image
          src={image.url!}
          alt=""
          className="md:rounded-3xl"
          height={700}
          width={700}
        />
      </div>
    </div>
  );
};

export default Environment;
