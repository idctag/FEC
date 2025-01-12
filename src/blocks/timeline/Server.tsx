"use client";
import { Media } from "@/payload-types";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export type TimeLineSectionProps = {
  title: string;
  sub: string;
  date: string;
  icon: Media;
};

export type TimeLineProps = {
  scroll: string;
  sections: TimeLineSectionProps[];
};
const TimeLineServer = (props: TimeLineProps) => {
  const { sections } = props;

  return (
    <div
      id={props.scroll || ""}
      className="flex w-full mt-12 justify-center bg-[#e0f2fe]"
    >
      <div className="w-full max-w-screen-2xl">
        <VerticalTimeline className="vertical-timeline-custom-line  vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
          {sections.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              icon={
                <div className="flex size-full items-center justify-center bg-white rounded-full">
                  <Image src={item.icon.url!} alt="" height={40} width={40} />
                </div>
              }
              dateClassName="timeline-date"
              date={item.date}
            >
              <p id="vertical-timeline-element-title">{item.title}</p>
              <p id="vertical-timeline-element-subtitle">{item.sub}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLineServer;
