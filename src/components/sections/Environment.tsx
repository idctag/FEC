"use client";
import { EnvironmentProps } from "@/blocks/environment/Server";
import Image from "next/image";
import React from "react";

const Environment = ({ image, title, subtitle }: EnvironmentProps) => {
  console.log(subtitle);
  return (
    <div className="flex gap-12 flex-col items-center my-20 max-w-bigscrn">
      <div>
        <p className="text-[4rem]">{title}</p>
        <div className="h-1 w-[12rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <div className="flex items-center p-12 gap-8">
        <p className="w-1/2 text-[1.8rem]">{subtitle}</p>
        <Image
          src={image.url!}
          alt=""
          className="rounded-3xl"
          height={700}
          width={700}
        />
      </div>
    </div>
  );
};

export default Environment;
