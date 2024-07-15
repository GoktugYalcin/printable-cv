import React from "react";

type SubHeaderProps = {
  text: string;
  loader?: boolean;
};

const SubHeader: React.FC<SubHeaderProps> = ({ text, loader }) => {
  return loader ? (
    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-8"></div>
  ) : (
    <span className="font-bold text-2xl mb-6">{text}</span>
  );
};

export default SubHeader;
