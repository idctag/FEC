import { Block } from "payload";

export const Enroll: Block = {
  slug: "enroll",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "sub",
      label: "Sub title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "link",
      label: "Link",
      type: "text",
      required: true,
    },
  ],
};
