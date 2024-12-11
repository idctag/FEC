"use client";
import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { Header, Media } from "@/payload-types";
type NavLinkProp = {
  href: string;
  title: string;
  icon?: Media | null | number;
};

const NavLink = ({ title, icon, href }: NavLinkProp) => {
  const isNumber = typeof icon === "number";
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal hover:text-blue-800"
    >
      <Link href={`#${href}`} className="flex items-end gap-3">
        {icon && !isNumber && icon.url && (
          <Image src={icon.url} alt="" width={25} height={25} />
        )}
        {title}
      </Link>
    </Typography>
  );
};

export function CustomNavbar({ logo, nav }: Omit<Header, "id">) {
  const [openNav, setOpenNav] = React.useState(false);
  const isNumber = typeof logo === "number";

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {nav.map((item, idx) => (
        <NavLink
          key={idx}
          href={item.link}
          title={item.label}
          icon={item.icon}
        />
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto text-blue-gray-900">
        <Link
          href="#"
          className="hidden md:block mr-4 cursor-pointer font-medium"
        >
          {logo && !isNumber && logo.url && (
            <div className="relative w-16 h-8">
              <Image
                priority
                src={logo.url}
                alt=""
                fill
                className="size-auto"
              />
            </div>
          )}
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <div>LS</div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
}
