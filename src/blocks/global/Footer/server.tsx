import { getPayload } from "payload";
import React from "react";
import config from "@payload-config";
import { SimpleFooter } from "@/components/Footer";

const FooterServer = async () => {
  const payload = await getPayload({ config });
  const footer = await payload.findGlobal({
    slug: "footer",
  });

  return (
    <SimpleFooter
      copyRight={footer.copyRight}
      logo={footer.logo}
      nav={footer.nav}
      title={footer.title}
      email={footer.email}
      phone={footer.phone}
      qr={footer.qr}
      scroll={footer.scroll}
    />
  );
};

export default FooterServer;
