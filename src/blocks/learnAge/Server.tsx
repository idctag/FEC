import LearningAge from "@/components/sections/LearningAge";

export type LearningAgeProps = {
  title: string;
  sub: string;
  desc: string;
  scroll: string;
};

const LearningAgeServer = ({ title, sub, desc, scroll }: LearningAgeProps) => {
  return <LearningAge scroll={scroll} sub={sub} title={title} desc={desc} />;
};

export default LearningAgeServer;
