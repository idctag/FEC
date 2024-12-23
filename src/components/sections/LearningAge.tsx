"use client";
import { LearningAgeProps } from "@/blocks/learnAge/Server";
import React from "react";

const LearningAge = ({ title, sub, desc }: LearningAgeProps) => {
  return (
    <div className="max-w-bigscrn flex size-full justify-center items-center flex-col gap-12 my-24 p-2">
      <div className="flex flex-col text-center gap-2 items-center">
        <p className="text-[3rem] 2xl:text-[4rem]">{title}</p>
        <div className="h-1 w-[15rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <div className="flex size-full border-4 border-primary rounded-3xl p-2 2xl:p-12">
        <p className="text-[1.5rem] 2xl:text-[1.7rem] text-center">
          {sub}. {desc}
        </p>
      </div>
    </div>
  );
};

export default LearningAge;
