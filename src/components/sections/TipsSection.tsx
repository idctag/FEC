"use client";
import { TipsType } from "@/blocks/tips/Server";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";

const TipsSection = (props: TipsType) => {
  const { tips, sub, title, scroll } = props;

  const [activeTab, setActiveTab] = React.useState(tips[0].category);
  return (
    <div
      id={scroll || ""}
      className="flex flex-col size-full gap-24 max-w-bigscrn"
    >
      <div className="flex flex-col text-center gap-2 items-center">
        <p className="text-[2.5rem] font-semibold 2xl:text-[4rem]">{title}</p>
        <div className="h-1 w-[15rem] mx-auto rounded-3xl bg-gradient-to-r to-primary from-secondary" />
      </div>
      <p className="text-center p-2 2xl:text-[2rem]">{sub}</p>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {tips.map((item, idx) => (
            <Tab
              key={idx}
              value={item.category}
              className="text-[0.7rem] 2xl:text-[1.4rem]"
              onClick={() => setActiveTab(item.category)}
            >
              {item.category}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tips.map((item, idx) => (
            <TabPanel
              key={idx}
              className="flex flex-col gap-4"
              value={item.category}
            >
              {item.tip.map((advice, idx) => (
                <p key={idx} className="2xl:text-[1.3rem]">
                  {idx + 1}. {advice.advice}
                </p>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TipsSection;
