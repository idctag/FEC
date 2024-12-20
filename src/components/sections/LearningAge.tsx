"use client";
import { LearningAgeProps } from "@/blocks/learnAge/Server";
import { Typography } from "@material-tailwind/react";
import React from "react";

const LearningAge = ({ title, sub, desc }: LearningAgeProps) => {
  return (
    <div className="max-w-bigscrn flex flex-col gap-12">
      <div className="flex flex-col gap-2 items-center">
        <Typography variant="h1">{title}</Typography>
        <div className="h-1 w-[20rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <div className="flex gap-4">
        <Typography>{sub}</Typography>
        <Typography>{desc}</Typography>
      </div>
    </div>
  );
};

export default LearningAge;
