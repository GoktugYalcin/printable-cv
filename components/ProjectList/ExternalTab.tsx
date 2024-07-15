import React from "react";
import Link from "next/link";

type ExternalTabProps = {
  title: string;
  url: string;
};

const ExternalTab: React.FC<ExternalTabProps> = ({ title, url }) => {
  return (
    <Link
      className="text-sm font-semibold print:hidden underline hover:text-slate-500 active:text-slate-500 transition-all"
      target={"_blank"}
      href={url}
    >
      {title}
    </Link>
  );
};

export default ExternalTab;
