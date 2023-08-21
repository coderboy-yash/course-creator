'use client'
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from 'next/navigation';
const Creator = () => {
  const router = useRouter();
  // console.log();
  const handleClick = () => {
    router.push('/creator/1')
  }

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
        <h1 className="text-2xl">Code With Harry</h1>

        <button onClick={handleClick} className="bg-gradient-to-r from-violet-600 to-indigo-600 w-1/2 rounded-2xl p-2 m-4 text-2xl">
          view page
        </button>
      </div>
    </div>
  );
};

export default Creator;
