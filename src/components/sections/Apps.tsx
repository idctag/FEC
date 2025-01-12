"use client";
import { AppsSection } from "@/blocks/apps/Server";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

export function CardComp({
  img,
  title,
  desc,
  color,
}: {
  img: string;
  title: string;
  desc: string;
  color: "red" | "green" | "blue" | "purple" | "orange" | "pink";
}) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader
        color={color || "blue-gray"}
        className="flex relative items-center justify-center h-56"
      >
        <Image
          src={img}
          alt=""
          className="size-auto"
          width={300}
          height={300}
        />
      </CardHeader>
      <CardBody>
        <p className={`mb-2 text-[2.5rem] text-${color}`}>{title}</p>
        <p>{desc}</p>
      </CardBody>
    </Card>
  );
}

const AppsComponent = (props: AppsSection) => {
  return (
    <div
      id={props.scroll}
      className="w-full max-w-bigscrn my-24 flex flex-col items-center gap-8 justify-center"
    >
      <div className="flex flex-col gap-4">
        <p className="max-w-[60rem] font-semibold text-[2.5rem] 2xl:text-[4rem] text-center">
          {props.title}
        </p>
        <div className="h-1 w-[20rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <div className="flex justify-center flex-wrap gap-24">
        {props.apps.map((app, idx) => (
          <CardComp
            color={app.color}
            key={idx}
            title={app.title}
            img={app.img.url!}
            desc={app.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default AppsComponent;
