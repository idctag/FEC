"use client";
import { Advantage, HeroProps } from "@/blocks/hero/Server";
import {
  Button,
  Carousel,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroLeft = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const titleParts = title.split(/(\[.*?\])/);
  const subTitleParts = subtitle.split(/(\[.*?\])/);

  return (
    <div className="w-full text-center h-[90vh] md:h-full md:text-left md:w-1/2 p-8 md:pl-20 flex flex-col justify-center gap-12 md:gap-28">
      <p className="text-[40px] md:text-[64px] font-semibold ">
        {titleParts.map((part, index) =>
          part.startsWith("[") && part.endsWith("]") ? (
            <span
              key={index}
              className="bg-gradient-to-r bg-clip-text text-transparent from-[#1C00EE] to-[#CC00FF]"
            >
              {part.slice(1, -1)}
            </span>
          ) : (
            part
          ),
        )}
      </p>
      <div className="flex gap-10 items-center md:justify-start justify-center">
        <Link href="#">
          <Button variant="gradient">Get Started</Button>
        </Link>
        <Link href="#">
          <p className="underline font-medium">Our Features</p>
        </Link>
      </div>
      <div className="max-w-[500px]">
        <p className="text-[24px] font-medium">
          {subTitleParts.map((part, index) =>
            part.startsWith("[") && part.endsWith("]") ? (
              <span
                key={index}
                className="bg-gradient-to-r bg-clip-text text-transparent from-[#0019DA] to-[#FF0527]"
              >
                {part.slice(1, -1)}
              </span>
            ) : (
              part
            ),
          )}
        </p>
      </div>
    </div>
  );
};
const HeroRight = ({ advantage }: { advantage: Advantage[] }) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex md:w-1/2 h-[60vh] max-w-[550px] md:h-[80%]">
      <Carousel
        className="md:rounded-3xl"
        loop
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {advantage.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setIndex(idx);
              handleOpen();
            }}
            className="relative size-full"
          >
            <Image src={item.image.url!} priority alt="" fill sizes="auto" />
            <div className="absolute inset-0 grid h-full w-full place-items-center hover:bg-black/60 hover:cursor-pointer"></div>
          </div>
        ))}
      </Carousel>
      <Dialog className="p-12 text-center" open={open} handler={handleOpen}>
        <DialogHeader>
          <p className="text-[40px]">{advantage[index].title}</p>
        </DialogHeader>
        <DialogBody>
          <p className="text-[30px]">{advantage[index].sub}</p>
        </DialogBody>
      </Dialog>
    </div>
  );
};

const Hero = ({ title, subtitle, advantage, scroll }: HeroProps) => {
  return (
    <div
      id={scroll}
      className="flex flex-col md:flex-row gap-24 max-w-bigscrn size-full items-center md:h-[80vh]"
    >
      <HeroLeft title={title} subtitle={subtitle} />
      <HeroRight advantage={advantage} />
    </div>
  );
};

export default Hero;
