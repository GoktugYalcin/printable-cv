"use client";

import React from "react";
import { CoolMode } from "@/components/shared/CoolMode";

const PrintButton = () => {
  const handlePrint = () => setTimeout(() => window.print(), 250);
  return (
    <CoolMode>
      <button
        className="fixed active:scale-95 right-12 bottom-12 font-bold print:opacity-0 inline-flex items-center justify-center rounded-md text-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        onClick={handlePrint}
      >
        Print It!
      </button>
    </CoolMode>
  );
};

export default PrintButton;
