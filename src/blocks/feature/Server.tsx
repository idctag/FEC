"use client";

import { cn } from "@/lib/utils";
import { Media } from "@/payload-types";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

type FeatureProps = {
  title: string;
  sub: string;
  color: string;
  description: string;
  image: Media;
  placement: "left" | "right";
};

const FeatureServer = ({
  title,
  sub,
  color,
  description,
  image,
  placement,
}: FeatureProps) => {
  return (
    <div className="flex snap-center flex-col w-full h-full gap-24 items-center my-24">
      <div
        className={cn(
          "flex flex-col max-w-screen-2xl w-full justify-evenly h-full md:h-[40vh] items-center md:snap-center",
          placement === "left" ? "md:flex-row-reverse" : "md:flex-row",
        )}
      >
        <div className="flex flex-col gap-4">
          <p className={cn(`text-7xl text-${color}`)}>{title}</p>
          <p className="text-4xl font-medium">{sub}</p>
          <div className="flex md:flex-col gap-8">
            <p className="text-gray-500">{description}</p>
            <Button variant="outlined" className="md:w-[30%] rounded-[5rem]">
              Learn More
            </Button>
          </div>
        </div>
        <Image priority src={image.url!} alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default FeatureServer;
