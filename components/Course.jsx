import React from "react";
import Image from "next/image";
import Link from "next/link";
const Course = ({ course }) => {

  return (
    <div className="w-80   ">
      <Image
        src={course.courseData.courseImage}
        width="400"
        height="400"
        alt="picture of the student"
        className="object-cover w-80 h-44  "
      ></Image>

      <div className="flex flex-col h-72 justify-between text-white bg-slate-700 ">
        <div className="justify-self-start">
        <h1 className="text-xl flex justify-center m-4 capitalize font-bold">{course.courseData.courseName}</h1>
        <div className="text-md overflow-hidden text-gray-200 p-3">
          {course.courseData.courseDescription.substring(0, 150)}<span className="text-2xl">...</span>
        </div>
        </div>
       
       
        <Link href={`/${course.channelName}/${course._id}`} className="bg-gradient-to-r from-violet-600 to-indigo-600 p-2  w-full text-2xl">
          start now
        </Link>
    

      </div>
    </div >
  );
};

export default Course;
