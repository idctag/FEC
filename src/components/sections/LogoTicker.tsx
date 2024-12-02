"use client";

import Image from "next/image";

const LogoTicker = () => {
  const logos = [
    { src: "/brand/logo1.svg" },
    { src: "/brand/logo2.svg" },
    { src: "/brand/logo3.svg" },
    { src: "/brand/logo4.svg" },
    { src: "/brand/logo5.svg" },
  ];

  const ticker_style =
    "flex gap-8 sm:gap-12 md:gap-36 flex-shrink-0 animate-infinite-scroll";

  return (
    <div className="md:h-[40vh] flex flex-nowrap gap-8 sm:gap-12 md:gap-36 w-full mb-24 mx-auto max-w-screen-2xl relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={ticker_style}>
        {logos.map((logo, idx) => (
          <Image
            priority
            key={idx}
            src={logo.src}
            alt=""
            className="object-contain max-w-full flex-shrink-0"
            height={150}
            width={150}
          />
        ))}
      </div>
      <div className={ticker_style}>
        {logos.map((logo, idx) => (
          <Image
            priority
            key={`2${idx}`}
            src={logo.src}
            alt=""
            className="object-contain max-w-full flex-shrink-0"
            height={150}
            width={150}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
