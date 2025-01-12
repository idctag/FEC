import { Block } from "payload";

export const Intro: Block = {
  slug: "intro",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "img",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "paragraph",
      label: "Paragraph",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "work",
      label: "Work",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "experience",
      label: "Experience",
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
      name: "scroll",
      label: "Scroll",
      type: "text",
    },
  ],
};
