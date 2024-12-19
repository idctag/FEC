import { Environment } from "@/blocks/environment/schema";
import { Hero } from "@/blocks/hero/schema";
import { Intro } from "@/blocks/intro/schema";
import { Logos } from "@/blocks/logo/schema";
import { TimeLine } from "@/blocks/timeline/schema";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero, TimeLine, Logos, Intro, Environment],
    },
  ],
};
