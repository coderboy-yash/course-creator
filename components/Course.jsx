import React from "react";
import Image from "next/image";
const Course = () => {
  return (
    <div className="w-1/4 text-white bg-slate-700">
      <Image
        src="/assets/course.png"
        width="400"
        height="400"
        alt="picture of the student"
        className="object-cover  "
      ></Image>

      <div className="flex flex-col justify-center p-3">
        <h1 className="text-2xl">Python Tutorials - 100 Days of Code</h1>
        <span className="text-slate-300 m-2">
          Python is one of the most demanded programming languages in the job
          market. Surprisingly, it is equally easy to learn and master Python.
          Let's commit our 100 days of code to python!
        </span>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 w-1/2 rounded-2xl p-2 m-4 text-2xl">
          start now
        </button>
      </div>
    </div>
  );
};

export default Course;
