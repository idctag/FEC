import LearningAge from "@/components/sections/LearningAge";

export type LearningAgeProps = {
  title: string;
  sub: string;
  desc: string;
};

const LearningAgeServer = ({ title, sub, desc }: LearningAgeProps) => {
  return <LearningAge sub={sub} title={title} desc={desc} />;
};

export default LearningAgeServer;
