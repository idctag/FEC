import { Block } from "payload";

export const Logos: Block = {
  slug: "logos",
  fields: [
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
