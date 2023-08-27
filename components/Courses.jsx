import React, { useContext } from "react";
import Course from "./Course";
import { ThemeContext } from "@/app/theme-provider";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageSkeleton from "./imageSkeleton";

const Courses = ({ id, courses,loading }) => {
  const value = useContext(ThemeContext);
  console.log(courses);
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-10 m-10 ">
      {
        loading && <ImageSkeleton></ImageSkeleton> 
      }
      {
        courses.length > 0 && courses.map(item => (

          <Course course={item}></Course>
        ))
      }
      {/* <Course></Course>
      <Course></Course>
      <Course></Course> */}

      {(value.uid == id) && <motion.div  initial={{rotate:0}} whileHover={{rotate:90}}  className="h-64 m-4 w-64 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-9xl rounded-full flex flex-col justify-center items-center">

        <Link href={`${id}/createCourse`} target="_blank" className="">+</Link>


      </motion.div>}
        {/* <Link href={`${id}/createCourse`} className="text-xl ">add course here</Link> */}



    </div>
  );
};

export default Courses;
