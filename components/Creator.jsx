'use client'
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from 'next/navigation';
const Creator = ({ channel }) => {
  const router = useRouter();
  console.log(channel);
  const handleClick = () => {
    const id = channel.channelName.split(" ").join("");
    router.push(`/${id}`);
  }

  return (
    // <div>yash</div>
    <div className="w-72 text-white bg-slate-700 ">
      <Image
        src={channel.channelImage}
        width="400"
        height="400"
        alt="picture of the student"
        className="object-cover w-72   "
      ></Image>

      <div className="flex flex-col justify-center ">
        <h1 className="text-3xl flex justify-center m-4 capitalize font-bold">{channel.channelName}</h1>
        <h2 className="text-md text-gray-200 p-3">{channel.description.substring(0, 100)}<span className="text-2xl">...</span></h2>
        <button onClick={handleClick} className="bg-gradient-to-r from-violet-600 to-indigo-600   p-2  w-full text-2xl">
          view page
        </button>
      </div>
    </div>
  );
};

export default Creator;
