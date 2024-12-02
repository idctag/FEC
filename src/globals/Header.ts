import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",
  fields: [
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
        {
          name: "icon",
          label: "Icon",
          type: "upload",
          relationTo: "media",
        },
      ],
      minRows: 1,
      required: true,
    },
  ],
};
