"use client";
import Image from "next/image";

const Stats = ({ title, sub }: { title: string; sub: string }) => {
  return (
    <div className="flex flex-col gap-4 px-3">
      <p className="text-3xl md:text-4xl font-semibold ">{title}</p>
      <p className="text-gray-500">{sub}</p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div
      id="about"
      className="h-full md:snap-center md:h-[80vh] justify-center mb-44 flex w-full"
    >
      <div className="max-w-screen-2xl flex flex-col-reverse md:flex-row w-full justify-between ">
        <div className="h-full flex items-center justify-center gap-4 md:rounded-l-[2rem] bg-blue-200 w-full md:w-1/2">
          <Image
            priority
            src="/point.png"
            className="self-end h-auto"
            alt=""
            width={400}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-12 h-full bg-amber-200 p-4 md:p-10 md:rounded-r-[2rem] justify-center">
          <div className="flex flex-col gap-4">
            <p className="text-7xl">Guided daily</p>
            <p className="text-2xl text-gray-500">
              Designed by teachers passionate about sharing knowledge with
              amazing kdis
            </p>
          </div>
          <div className="flex justify-evenly">
            <Stats title="10,000+" sub="Students empovered" />
            <div className="border-l-gray-300 border-r-gray-300 border-y-0 border md:px-8">
              <Stats title="50+" sub="Fun Activities" />
            </div>
            <Stats title="10+" sub="Years of experience" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
