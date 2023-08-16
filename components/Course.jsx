import React from "react";
import Image from "next/image";
import Link from "next/link";
const Course = ({ course }) => {
  console.log();
  return (
    <div className="mx-32 my-8 bg-yellow-50  h-52 flex gap-10 border-2 border-yellow-300 relative  ease-in-out duration-200 hover:shadow-lg hover:scale-105 hover:shadow-gray-100 ">
      <div className="absolute -top-4 -right-8 bg-orange-400 p-2 text-white">
        {course.course_type}
      </div>
      <Image
        src={course.image_link}
        width="200"
        height="100"
        alt="Picture of the student"
        className="object-cover w-64 h-full"
      ></Image>
      <div className="p-4 flex flex-col gap-2">
        <div className="text-4xl font-bold text-gray-600 mb-6">
          {course.course_name}
        </div>
        <div className="text-2xl">{course.description} </div>

        <Link
          href={`/topic/${course.id}`}
          className="bg-orange-400 text-white p-2 text-3xl w-44 rounded-md  active:bg-orange-200"
        >
          Start Now.
        </Link>
      </div>
    </div>
  );
};

export default Course;
