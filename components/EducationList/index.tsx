import React from "react";
import SubHeader from "@/components/shared/SubHeader";
import { getEducationFields } from "@/lib/air";

const EducationList = async () => {
  const eduData = await getEducationFields();

  console.log(eduData);

  return (
    <div className="flex flex-wrap flex-col justify-center items-start w-2/4 print:w-3/4">
      <SubHeader text={"Education 📖"} />
      <div>
        {eduData.map(({ school_name, desc, gpa }, index) => {
          return (
            <div
              className="flex justify-start items-start flex-col gap-1 mb-4"
              key={index}
            >
              <span className="font-semibold">{school_name}</span>
              <span>{desc}</span>
              <div className="flex justify-end items-center gap-2 mt-1">
                GPA: {gpa}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationList;
