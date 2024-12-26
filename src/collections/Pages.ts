import { Apps } from "@/blocks/apps/schema";
import { Environment } from "@/blocks/environment/schema";
import { Hero } from "@/blocks/hero/schema";
import { Intro } from "@/blocks/intro/schema";
import { LearningAge } from "@/blocks/learnAge/schema";
import { Logos } from "@/blocks/logo/schema";
import { Test } from "@/blocks/test/schema";
import { TimeLine } from "@/blocks/timeline/schema";
import { Tips } from "@/blocks/tips/schema";
import { Vocabulary } from "@/blocks/vocabulary/schema";
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
      blocks: [
        Hero,
        TimeLine,
        Logos,
        Intro,
        Environment,
        LearningAge,
        Apps,
        Vocabulary,
        Tips,
        Test,
      ],
    },
  ],
};
