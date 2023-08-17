import React from "react";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-10 ">
      <Course></Course>
      <Course></Course>
      <Course></Course>
      <Course></Course>
    </div>
  );
};

export default Courses;
