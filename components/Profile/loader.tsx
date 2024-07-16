import React from "react";

const ProfileLoader = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-3 w-2/4 print:w-full">
        <div className="flex flex-col w-full">
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-1"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-1"></div>
        </div>
        <div className="h-[60px] w-[65px] bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <div className="w-2/4 text-sm mt-14 print:w-full">
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-1"></div>
      </div>
    </>
  );
};

export default ProfileLoader;
