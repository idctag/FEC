"use client";
import { Footer } from "@/payload-types";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const currentYear = new Date().getFullYear();

export function SimpleFooter({
  copyRight,
  nav,
  title,
  email,
  phone,
  qr,
  scroll,
}: Omit<Footer, "id">) {
  const isNumber = typeof qr === "number";
  return (
    <footer
      id={scroll || ""}
      className="flex w-full mt-12 justify-center md:mb-4"
    >
      <div className="flex flex-col w-full max-w-screen-2xl text-white md:rounded-3xl bg-[#1E1E1E] py-8 px-12">
        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* CONTACT */}
          <div className="flex flex-col gap-4">
            <p className="text-[32px]">{title}</p>

            <div className="flex flex-col gap-8 pt-8 text-[24px]">
              <div className="flex gap-4 items-center">
                <FiPhone />
                <p>{phone}</p>
              </div>
              <div className="flex gap-4 items-center">
                <IoMailOutline />
                <p>{email}</p>
              </div>
            </div>
          </div>
          {/* LINKS */}
          <div className="flex flex-row flex-wrap md:flex-col gap-4 my-8 md:my-0 h-full justify-evenly text-[24px]">
            {nav.map((link, idx) => (
              <button
                className="hover:underline"
                key={`#${idx}`}
                onClick={() => {
                  const element = document.getElementById(link.link);
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
          {/* APP */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[24px]">Download Our App</p>
            {qr && !isNumber && qr.url && (
              <Image
                src={qr.url!}
                alt=""
                className="bg-white rounded-xl"
                width={200}
                height={200}
              />
            )}
          </div>
        </div>
        <div className="flex w-full text-gray-300 justify-center">{`${currentYear} ${copyRight}`}</div>
      </div>
    </footer>
  );
}
