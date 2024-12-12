import { usePathname, useRouter } from "@/i18n/routing";
import { GrLanguage } from "react-icons/gr";
import { useLocale } from "next-intl";

import React from "react";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const isEn = locale === "en";

  const changeLang = (lang: string) => {
    router.replace(pathname, { locale: lang });
  };
  return (
    <div className="flex items-center gap-3">
      <p
        className={`hover:cursor-pointer ${isEn && "underline"}`}
        onClick={() => changeLang("en")}
      >
        EN
      </p>
      <GrLanguage size={25} />
      <p
        className={`hover:cursor-pointer ${!isEn && "underline"}`}
        onClick={() => changeLang("mn")}
      >
        MN
      </p>
    </div>
  );
};

export default LocaleSwitcher;
