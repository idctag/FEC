import { Block } from "payload";

export const Environment: Block = {
  slug: "environment",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "scroll",
      label: "Scroll",
      type: "text",
    },
    {
      name: "subtitle",
      label: "Sub title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "desc",
      label: "Description",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
