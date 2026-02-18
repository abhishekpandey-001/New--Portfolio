import React from "react";

const Education = () => {
  return (
    <div className="flex min-h-screen flex-col mx-9 mt-10">
      <h1 className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-4xl">
        Education
      </h1>

      <div className="mt-4 flex items-center gap-4">
        {/* University Logo */}
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-white/5">
          <img
            src="/myuni.png"
            alt="AKTU Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-[#e5e5e5]">
            Abdul Kalam Technical University
          </h3>
          <p className="text-sm text-white/70">
            Bachelor of Technology in Computer Science & Engineering
          </p>
        </div>

        {/* Year */}
        <div className="ml-auto text-sm text-white/60 whitespace-nowrap">
          2021 – 2025
        </div>
      </div>
    </div>
  );
};

export default Education;
