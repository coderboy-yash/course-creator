import React from "react";
import Image from "next/image";
import Link from "next/link";
const Creator = ({ course }) => {
  // console.log();
  return (
    <div>
      <Image
        src={course.image_link}
        width="200"
        height="200"
        alt="picture of the student"
        className="object-cover w-64 h-full"
      ></Image>
    </div>
  );
};

export default Creator;
