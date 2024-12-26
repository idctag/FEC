"use client";
import { TestTypes } from "@/blocks/test/Server";
import React from "react";
import testAnimation from "@/../public/test.json";
import Lottie from "lottie-react";

const TestSection = (props: TestTypes) => {
  const { scroll, links, desc, title } = props;
  return (
    <div id={scroll} className="size-full my-12 flex max-w-screen-2xl ">
      <div className="flex  flex-col 2xl:flex-row ">
        <Lottie
          animationData={testAnimation}
          className="2xl:w-1/2 relative translate-x-[-2rem] 2xl:translate-x-[-6rem]"
        />
        <div className="2xl:w-1/2 relative flex flex-col p-4 gap-12">
          <div className="">
            <p className="text-[2.5rem] 2xl:text-[3.5rem] font-semibold">
              {title}
            </p>
            <p className="text-gray-500 2xl:text-[1.3rem]">{desc}</p>
          </div>
          <div className="flex flex-col 2xl:flex-row gap-8">
            {links.map((item, idx) => (
              <a key={idx} href={item.link}>
                <button className="group flex size-full justify-center py-2 items-center gap-2 rounded-full bg-neutral-200 pl-6 pr-7 transition-all duration-300 ease-in-out hover:bg-primary hover:pl-4 hover:text-white active:bg-neutral-700">
                  <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                  <span className="2xl:text-[1.3rem]">{item.title}</span>
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSection;
