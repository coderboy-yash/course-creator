import React from "react";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-10 ">

      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>

      <div className="h-64 m-4 w-64 bg-slate-700 text-orange-400 text-9xl flex flex-col justify-center items-center">
        <span className="">+</span>

        <span className="text-xl text-white">add course here</span>

      </div>



    </div>
  );
};

export default Courses;
