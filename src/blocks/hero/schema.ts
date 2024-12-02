import { Block } from "payload";

export const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "subtitle",
      label: "Sub title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
