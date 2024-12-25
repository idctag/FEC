import { Block } from "payload";

export const Tips: Block = {
  slug: "tips",
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
      name: "sub",
      label: "Sub Title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "tips",
      label: "Tips",
      type: "array",
      fields: [
        {
          name: "category",
          label: "Category",
          type: "text",
          localized: true,
        },
        {
          name: "tip",
          label: "Tip",
          type: "array",
          fields: [
            {
              name: "advice",
              label: "Advice",
              type: "text",
              localized: true,
            },
          ],
        },
      ],
    },
  ],
};
