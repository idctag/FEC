import { Block } from "payload";

export const Test: Block = {
  slug: "test",
  fields: [
    {
      name: "scroll",
      label: "Scroll",
      type: "text",
    },
    {
      name: "title",
      label: "Title",
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
      name: "links",
      label: "Links",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Title",
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
    },
  ],
};
