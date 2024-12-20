import EnvironmentServer from "@/blocks/environment/Server";
import HeroServer from "@/blocks/hero/Server";
import IntroServer from "@/blocks/intro/Server";
import LearningAgeServer from "@/blocks/learnAge/Server";
import LogosServer from "@/blocks/logo/Server";
import TimeLineServer from "@/blocks/timeline/Server";
import { Page } from "@/payload-types";
import React, { Fragment } from "react";

const blockComponents: any = {
  hero: HeroServer,
  timeline: TimeLineServer,
  logos: LogosServer,
  intro: IntroServer,
  environment: EnvironmentServer,
  learningAge: LearningAgeServer,
};

export const RenderBlocks: React.FC<{
  blocks: Page["layout"];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <div key={index} className="w-full flex flex-col items-center">
                  <Block id={blockName} {...block} />
                </div>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
