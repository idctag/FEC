import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      label: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "nav",
      label: "Navigation",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "link",
          type: "text",
          required: true,
        },
      ],
      minRows: 1,
      required: true,
    },
    {
      name: "copyRight",
      label: "Copyright Notice",
      type: "text",
      required: true,
    },
  ],
};
