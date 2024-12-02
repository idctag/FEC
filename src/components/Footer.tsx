"use client";
import { Footer } from "@/payload-types";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const currentYear = new Date().getFullYear();

export function SimpleFooter({
  copyRight,
  logo,
  nav,
  title,
}: Omit<Footer, "id">) {
  const isNumber = typeof logo === "number";
  return (
    <footer className="flex justify-center w-full bg-white p-8">
      <div className="max-w-screen-2xl w-full">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <div className="flex gap-4 items-center text-2xl">
            {logo && !isNumber && logo.url && (
              <Image src={logo.url} alt="logo-ct" width={60} height={60} />
            )}
            {title}
          </div>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            {nav.map((item, idx) => (
              <li key={idx}>
                <Typography
                  as="a"
                  href={`#${item.link}`}
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  {item.label}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography className="text-center text-gray-500 font-normal">
          &copy; {currentYear} {` ${copyRight}`}
        </Typography>
      </div>
    </footer>
  );
}
