"use client";
import { Advantage, HeroProps } from "@/blocks/hero/Server";
import {
  Carousel,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";
import Lottie from "lottie-react";
import rocket from "@/../public/rocket.json";
import cursor from "@/../public/cursor.json";
import { motion, useAnimationControls } from "framer-motion";

const HeroLeft = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const titleParts = title.split(/(\[.*?\])/);
  const subTitleParts = subtitle.split(/(\[.*?\])/);

  return (
    <div className="w-full relative text-center h-[90vh] md:h-full md:text-left md:w-1/2 p-8 md:pl-20 flex flex-col justify-center gap-12 md:gap-28">
      <Lottie
        className="absolute z-[-10]  md:top-[20%] md:right-[-14%] md:w-[300px]"
        animationData={rocket}
      />
      <p className="text-[40px] md:text-[64px] font-semibold ">
        {titleParts.map((part, index) =>
          part.startsWith("[") && part.endsWith("]") ? (
            <span
              key={index}
              className="bg-gradient-to-r bg-clip-text text-transparent from-primary to-secondary"
            >
              {part.slice(1, -1)}
            </span>
          ) : (
            part
          ),
        )}
      </p>
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
  const controls = useAnimationControls();
  const handleHover = () => {
    controls.start("open");
  };

  const handleHoverEnd = () => {
    controls.start("initial");
  };
  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex md:w-1/2 h-[60vh] max-h-[700px] w-full max-w-[550px] md:h-[80%]">
      <Carousel
        autoplay
        className="md:rounded-3xl"
        loop
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
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
            onHoverStart={handleHover}
            onHoverEnd={handleHoverEnd}
            key={idx}
            onClick={() => {
              setIndex(idx);
              handleOpen();
            }}
            className="object-fill size-full absolute overflow-hidden"
          >
            <motion.img
              src={item.image.url!}
              variants={{
                initial: {
                  scale: 1,
                },
                open: {
                  scale: 1.1,
                },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              alt=""
              className="object-fill size-full"
              initial="initial"
              animate={controls}
            />
            <motion.div className="absolute inset-0 grid h-full w-full place-items-center group hover:bg-black/60 hover:cursor-pointer">
              <motion.p
                variants={{
                  initial: {
                    opacity: 0,
                    x: -10,
                  },
                  open: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="text-white text-3xl"
                initial="initial"
                animate={controls}
              >
                Click for More
              </motion.p>
              <Lottie
                className="absolute w-[100px] top-4 right-4"
                animationData={cursor}
              />

              <motion.p
                variants={{
                  initial: {
                    opacity: 0,
                    x: -10,
                  },
                  open: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="text-white px-4 text-xl md:text-3xl"
                initial="initial"
                animate={controls}
              >
                {item.title}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </Carousel>
      <Dialog
        size="lg"
        className="p-2 md:p-12 text-center"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className="text-center flex items-center justify-center">
          <p className="text-[22px] md:text-[30px]">{advantage[index].title}</p>
        </DialogHeader>
        <DialogBody>
          <p className="text-[16px] md:text-[20px]">{advantage[index].sub}</p>
        </DialogBody>
      </Dialog>
    </div>
  );
};

const Hero = ({ title, subtitle, advantage, scroll }: HeroProps) => {
  return (
    <div
      id={scroll}
      className="flex flex-col md:flex-row relative gap-24 max-w-bigscrn size-full items-center md:h-[80vh]"
    >
      <HeroLeft title={title} subtitle={subtitle} />
      <HeroRight advantage={advantage} />
    </div>
  );
};

export default Hero;
