import { Block } from "payload";

export const Feature: Block = {
  slug: "feature",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "color",
      label: "Title color",
      type: "text",
      defaultValue: "000000",
    },
    {
      name: "sub",
      label: "Sub title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "placement",
      label: "Content Placement",
      type: "radio",
      options: ["left", "right"],
      defaultValue: "left",
    },
  ],
};
