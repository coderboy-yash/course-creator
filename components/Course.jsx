import React from "react";
import Image from "next/image";
import Link from "next/link";
const Course = ({ course }) => {

  return (
    <div className="w-1/4 text-white bg-slate-700">
      <Image
        src={course.courseData.courseImage}
        width="400"
        height="400"
        alt="picture of the student"
        className="object-cover  "
      ></Image>

      <div className="flex flex-col justify-center p-3">
        <h1 className="text-2xl">{course.courseData.courseName}</h1>
        <span className="text-slate-300 m-2">
          {course.courseData.courseDescription.substring(0, 30)}
        </span>
        <Link href={`/${course.channelName}/${course._id}`} className="bg-gradient-to-r from-violet-600 to-indigo-600 w-1/2 rounded-2xl p-2 m-4 text-2xl">
          start now
        </Link>
      </div>
    </div >
  );
};

export default Course;
