"use client";
import { Advantage, HeroProps } from "@/blocks/hero/Server";
import { Button, Carousel } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

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
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <motion.div className="h-[600px] w-full md:h-[70vh] md:w-1/2 overflow-hidden flex justify-center group/card">
      <Modal>
        <Carousel
          className="overflow-hidden md:max-w-[35vw]"
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          loop
          autoplay
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`rounded-2xl block h-1 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {advantage.map((item, idx) => (
            <motion.div
              className="size-full"
              key={idx}
              initial={windowWidth < 720 ? "start" : "initial"}
              exit="exit"
              whileHover={"start"}
            >
              <ModalTrigger className="size-full md:rounded-3xl p-0">
                <motion.div className="group-hover/card:block inset-0 md:hidden absolute w-full h-full overflow-hidden bg-black/40 z-10 transition duration-500" />
                <div
                  onClick={() => setIndex(idx)}
                  className="flex h-full w-full relative"
                >
                  <motion.img
                    variants={{
                      initial: { scale: 1 },
                      exit: { scale: 1 },
                      start: { scale: 1.1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    src={item.image.url!}
                    alt={item.title}
                    className="object-fill size-full"
                  />
                  <motion.p
                    className="absolute pl-4 pt-10 text-[38px] text-white z-20"
                    variants={{
                      initial: { opacity: 0 },
                      exit: { opacity: 0, x: 0 },
                      start: { opacity: 1, x: 4 },
                    }}
                  >
                    Click For More
                  </motion.p>
                  <motion.p
                    className="absolute bottom-20 text-[28px] pr-2 left-2 text-left text-white z-20"
                    variants={{
                      initial: { opacity: 0 },
                      exit: { opacity: 0, x: 0 },
                      start: { opacity: 1, x: 4 },
                    }}
                  >
                    {item.title}
                  </motion.p>
                </div>
              </ModalTrigger>
            </motion.div>
          ))}
        </Carousel>
        <ModalBody className="relative">
          <ModalContent className="size-full gap-14 justify-center bg-gradient-to-b text-white from-indigo-700 to-indigo-700/80">
            <p className="text-2xl md:text-4xl font-semibold">
              {advantage[index].title}
            </p>
            <p className="text-[20px] md:text-[24px]">{advantage[index].sub}</p>
          </ModalContent>
        </ModalBody>
      </Modal>
    </motion.div>
  );
};

const Hero = ({ title, subtitle, advantage, scroll }: HeroProps) => {
  return (
    <div
      id={scroll}
      className="flex flex-col md:flex-row gap-24 max-w-bigscrn w-full h-full items-center md:h-[80vh]"
    >
      <HeroLeft title={title} subtitle={subtitle} />
      <HeroRight advantage={advantage} />
    </div>
  );
};

export default Hero;
