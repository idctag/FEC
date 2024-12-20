import { Block } from "payload";

export const LearningAge: Block = {
  slug: "learningAge",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "sub",
      label: "sub",
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
  ],
};
