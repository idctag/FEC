"use client";
import { LearningAgeProps } from "@/blocks/learnAge/Server";
import React from "react";

const LearningAge = ({ title, sub, desc }: LearningAgeProps) => {
  return (
    <div className="max-w-bigscrn flex flex-col gap-12 my-24">
      <div className="flex flex-col text-center gap-2 items-center">
        <p className="text-[3rem] md:text-[4rem]">{title}</p>
        <div className="h-1 w-[20rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <div className="flex max-w-[1200px] flex-col gap-4">
        <p className="text-[1.8rem] text-center">{sub}</p>
        <p className="text-[1rem] text-center">{desc}</p>
      </div>
    </div>
  );
};

export default LearningAge;
