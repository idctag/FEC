import { Block } from "payload";

export const Apps: Block = {
  slug: "apps",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "apps",
      label: "Apps",
      type: "array",
      fields: [
        {
          name: "title",
          label: "title",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "desc",
          label: "desc",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "img",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "color",
          label: "Color",
          type: "select",
          options: ["red", "green", "blue", "purple", "orange", "pink"],
        },
      ],
    },
  ],
};
