"use client";
import { Media } from "@/payload-types";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

export type HeroProps = {
  title: string;
  subtitle: string;
  image: Media;
};

const txt = {
  contact: "Contact Us",
  many: "And many others",
  trust: "Trusted by over",
  parent: "Parents",
};
const HeroServer = ({ title, subtitle, image }: HeroProps) => {
  return (
    <div className="flex flex-col w-full justify-center md:px-6 md:pt-2">
      <div className="bg-gradient-to-tl from-emerald-300 to-emerald-300/90 w-full h-[72vh] md:h-[65vh] md:rounded-t-[4rem] flex items-center flex-col text-center md:text-start justify-evenly md:flex-row md:p-5">
        <div className="md:w-3/5 flex justify-center">
          <div className="flex flex-col gap-4 max-w-[500]">
            <Typography className="font-poppins font-semibold text-4xl md:text-6xl ">
              {title}
            </Typography>
            <Typography className="font-poppins text-xl text-gray-600">
              {subtitle}
            </Typography>
            <div>
              <Button variant="gradient" className="px-10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <Image src={image.url!} priority width={500} height={500} alt="" />
        </div>
      </div>
      <div className="flex flex-col py-4 gap-8 h-[25vh] w-full bg-gradient-to-br from-black to-black/80 md:rounded-b-[3rem] text-white items-center justify-center">
        <div className="text-center gap-4 flex flex-col">
          <Typography className="md:text-3xl text-xl font-medium tracking-wider">
            {txt.trust}
            <span className="font-bold text-2xl md:text-4xl"> 1,000+ </span>
            {txt.parent}
          </Typography>
          <Typography className="md:text-3xl text-xl font-medium tracking-wider">
            {txt.many}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HeroServer;
