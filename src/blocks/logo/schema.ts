import { Block } from "payload";

export const Logos: Block = {
  slug: "logos",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      localized: true,
    },
    {
      name: "direction",
      label: "Direction",
      type: "select",
      options: ["right", "left"],
    },
    {
      name: "slider",
      type: "array",
      required: true,
      fields: [
        {
          name: "logo",
          label: "Logo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
