"use client";
import { EnrollProps } from "@/blocks/enroll/Server";

const EnrollSection = (props: EnrollProps) => {
  const { title, link, sub } = props;
  return (
    <div className="size-full px-12 gap-8 flex flex-col 2xl:flex-row items-center justify-between  max-w-screen-2xl bg-primary/70 p-4 2xl:rounded-2xl">
      <p className="text-[2.5rem] text-white text-center font-semibold">
        {title}
      </p>
      <div className="h-20 w-full max-w-72 bg-black">
        <a href={link}>
          <button className="group flex hover:translate-x-[20px] hover:translate-y-[-15px] transition-transform duration-300 h-full w-full items-center justify-between border-2 border-black bg-white px-8 text-xl font-semibold">
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                {sub}
              </span>
              <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                {sub}
              </span>
            </span>
            <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 -translate-x-full text-primary transition-transform duration-300 group-hover:translate-x-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default EnrollSection;
