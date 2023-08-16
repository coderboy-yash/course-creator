import React from "react";
import data from "../data/course_list.json";
import Course from "./Course";
const Courses = () => {
  //   console.log(data[0].id);
  return (
    <div>
      <div className="flex justify-center items-center text-4xl p-2 text-white font-bold bg-gradient-to-r from-orange-400 to-yellow-400  mb-28 ">
        Explore new and trending free online courses
      </div>
      <div>
        {data.map((item) => (
          <Course course={item} key={item.id}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
