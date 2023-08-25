"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/app/theme-provider";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';
const Hero = () => {
  const router = useRouter();
  const value = useContext(ThemeContext);
  useEffect(() => {
    console.log(value)
  }, [value.uid]);
  const handleClick = () => {
    if (value.uid == "") {
      return toast.error("you must login first");
    }
    else {
      router.push('/createChannel')
    }
  }

  return (
    <div
      className="text-white"
      style={{
        background:
          "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",
      }}
    >
      <Toaster></Toaster>
      <div className="flex p-4  justify-between h-screen">
        <div className="basis-1/2 flex    flex-col">

          <div className="text-5xl  mt-8 font-medium text-white">
            Create your online course for
            <span className="font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              free
            </span>
            with your youtube videos.
          </div>
          <div className="mt-8">
            1000+ Free Courses, Live Sessions by Experts, and Job Opportunities
            from 2800+ Companies. Join 1 Crore+ learners to build your dream
            career now!
          </div>
          <div>
            <button onClick={handleClick} className="bg-orange-400 p-4 text-2xl rounded-xl text-white font-bold">Crete for free</button>

          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="/assets/student1.png"
            width={800}
            height={500}
            alt="Picture of the student"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
