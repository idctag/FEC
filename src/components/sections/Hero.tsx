"use client";
import { Advantage, HeroProps } from "@/blocks/hero/Server";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden relative size-full md:rounded-3xl h-[70vh] md:h-[80%] max-w-[500px] md:w-1/2">
      <div className="flex size-full" ref={emblaRef}>
        <div className="flex size-full">
          {advantage.map((adv, idx) => (
            <div key={idx} className="flex flex-none size-full">
              <div className="absolute flex size-full">
                <Image src={adv.image.url!} alt="" sizes="auto" priority fill />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex absolute inset-0 items-center w-full max-w-[500px]">
        <div className="px-4 max-w-[500px] w-full flex justify-between">
          <button onClick={scrollPrev}>
            <RiArrowLeftWideLine size={40} className="embla__button" />
          </button>
          <button onClick={scrollNext}>
            <RiArrowRightWideLine size={40} className="embla__button" />
          </button>
        </div>
      </div>
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
