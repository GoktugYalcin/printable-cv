import React from "react";
import SubHeader from "@/components/shared/SubHeader";

const EducationLoader = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center items-start w-2/4">
      <SubHeader text={"Projects 🚜"} loader />
      <div>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className="flex justify-start items-start flex-col gap-1 mb-6"
              key={index}
            >
              <span className="font-semibold">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1"></div>
              </span>
              <span>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[550px] mb-1"></div>
              </span>
              <div className="flex justify-end items-center gap-2 mt-1">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationLoader;
