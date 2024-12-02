import { getPayload } from "payload";
import React from "react";
import config from "@payload-config";
import { CustomNavbar } from "@/components/NavBar";

const HeaderServer = async () => {
  const payload = await getPayload({ config });
  const header = await payload.findGlobal({
    slug: "header",
  });

  return <CustomNavbar logo={header.logo} nav={header.nav} />;
};

export default HeaderServer;
