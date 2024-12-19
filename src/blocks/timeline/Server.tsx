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
  sections: TimeLineSectionProps[];
};
const TimeLineServer = (props: TimeLineProps) => {
  const { sections } = props;

  return (
    <div className="flex w-full mt-12 justify-center bg-gradient-to-tr from-primary/70 to-primary/60">
      <div className="w-full max-w-screen-2xl">
        <VerticalTimeline className="vertical-timeline-custom-line vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
          {sections.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              icon={
                <div className="flex size-full items-center justify-center bg-yellow-700  rounded-full">
                  <Image src={item.icon.url!} alt="" height={40} width={40} />
                </div>
              }
              dateClassName="timeline-date"
              date={item.date}
            >
              <h3 id="vertical-timeline-element-title">{item.title}</h3>
              <p id="vertical-timeline-element-subtitle">{item.sub}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLineServer;
