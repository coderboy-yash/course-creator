import React, { useContext } from "react";
import Course from "./Course";
import { ThemeContext } from "@/app/theme-provider";
import Link from "next/link";

const Courses = ({ id, courses }) => {
  const value = useContext(ThemeContext);
  console.log(courses);
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-10 ">
      {
        courses.length > 0 && courses.map(item => (

          <Course course={item}></Course>
        ))
      }
      {/* <Course></Course>
      <Course></Course>
      <Course></Course> */}

      {(value.uid == id) && <div className="h-64 m-4 w-64 bg-slate-700 text-orange-400 text-9xl flex flex-col justify-center items-center">

        <Link href={`${id}/createCourse`} className="">+</Link>

        <Link href={`${id}/createCourse`} className="text-xl text-white">add course here</Link>

      </div>}



    </div>
  );
};

export default Courses;
