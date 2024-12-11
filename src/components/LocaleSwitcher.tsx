import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@material-tailwind/react";
import React from "react";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang: string) => {
    router.replace(pathname, { locale: lang });
  };
  return (
    <div>
      <Button onClick={() => changeLang("en")}>En</Button>
      <Button onClick={() => changeLang("mn")}>Mn</Button>
    </div>
  );
};

export default LocaleSwitcher;
