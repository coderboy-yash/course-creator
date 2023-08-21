import React from "react";
import data from "../data/course_list.json";
import Creator from "./Creator";
import Link from "next/link";
const Creators = () => {
  //   console.log(data[0].id);
  return (
    <div>
      <span className="flex text-4xl justify-center font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
        Popular creators
      </span>
      <div className="flex flex-wrap gap-4 justify-center p-4 mb-16 ">
        <div className="h-64 w-64 bg-slate-700 text-orange-400 text-9xl flex justify-center items-center">
          <Link href="/create" className="">+</Link>
        </div>
        {data.map((item) => (
          <Creator course={item} key={item.id}></Creator>
        ))}
      </div>
    </div>
  );
};

export default Creators;
