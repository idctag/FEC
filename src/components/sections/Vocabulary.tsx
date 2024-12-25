"use client";
import { VocabularyServerProps } from "@/blocks/vocabulary/Server";
import React from "react";

const Vocabulary = ({ scroll, title, advices }: VocabularyServerProps) => {
  const colors = [
    "bg-yellow-200",
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-indigo-200",
  ];
  return (
    <div id={scroll || ""} className="max-w-bigscrn flex flex-col gap-24">
      <div className="flex flex-col items-center text-center">
        <p className="text-[2.5rem] font-semibold 2xl:text-[4rem]">{title}</p>
        <div className="h-1 w-[15rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <div className="flex justify-center flex-wrap 2xl:gap-8">
        {advices.map((item, idx) => (
          <div
            key={idx}
            className={`flex max-w-[25rem] ${colors[idx % 5]} p-4 2xl:rounded-3xl items-center gap-8`}
          >
            <p className="text-[4rem] font-semibold">{idx + 1}</p>
            <p className="text-[1.2rem]">{item.advice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vocabulary;
