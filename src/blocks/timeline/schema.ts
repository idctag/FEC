import { Block } from "payload";

export const TimeLineSection: Block = {
  slug: "timelineSection",
  fields: [
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
      name: "date",
      label: "Date",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      label: "Icon",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export const TimeLine: Block = {
  slug: "timeline",
  fields: [
    {
      name: "sections",
      label: "Sections",
      type: "blocks",
      blocks: [TimeLineSection],
      required: true,
    },
  ],
};
