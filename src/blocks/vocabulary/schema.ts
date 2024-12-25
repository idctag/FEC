import { Block } from "payload";

export const Vocabulary: Block = {
  slug: "vocabulary",
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
      name: "advices",
      label: "Advices",
      type: "array",
      fields: [
        {
          name: "advice",
          type: "text",
          required: true,
          localized: true,
        },
      ],
    },
  ],
};
