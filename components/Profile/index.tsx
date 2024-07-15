import React from "react";
import Image from "next/image";
import { getProfileFields } from "@/lib/air";

const Profile = async () => {
  const { name, surname, description, profile_pic_url, long_description } =
    await getProfileFields();

  return (
    <>
      <div className="flex justify-center items-center gap-3 w-2/4 print:w-3/4">
        <div className="flex flex-col">
          <span className="font-bold text-3xl">{`${name} ${surname}`}</span>
          <span className="text-lg text-slate-500">{description}</span>
        </div>
        <Image
          className="rounded-full"
          width={60}
          height={60}
          src={profile_pic_url}
          alt={"Photo of CV Owner"}
        />
      </div>
      <div className="w-2/4 text-sm mt-6 print:w-3/4">{long_description}</div>
    </>
  );
};

export default Profile;
