"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/app/theme-provider";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
const Hero = () => {
  // const ref=useRef(null);
  // const isInView=useInView(ref)
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
      className="text-white m-4"
      style={{
        background:
          "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%)",
      }}
    >
      <Toaster></Toaster>
      <div className="flex p-4 md:flex-row flex-col  justify-between ">
        <motion.div   initial={{ x:-50 ,opacity:0 }}  whileInView={{ x:0,opacity:1 }} transition={{ease:"linear"}}
 className="basis-1/2 flex    flex-col">

          <div className="md:text-5xl text-3xl p-4  mt-8 font-medium text-white">
            Create your online course for
            <span className="font-bold mx-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              free
            </span>
            with your youtube videos.
          </div>
          <div className="mt-8 p-4">
            1000+ Free Courses, Live Sessions by Experts, and Job Opportunities
            from 2800+ Companies. Join 1 Crore+ learners to build your dream
            career now!
          </div>
          <div className="m-4">
            {/* <button onClick={handleClick} className="bg-orange-400 p-4 text-2xl m-4 rounded-xl text-white font-bold">Create for free</button> */}

            <Link href="/createChannel" target="_blank"  className="bg-orange-400 p-4 text-2xl m-4 rounded-xl text-white font-bold">Create for free</Link>
          </div>
        </motion.div>
        <motion.div initial={{ x:30 }} whileInView={{x:-20}} transition={{delay:0.7}} className="basis-1/2 ml-10">
          <Image
            src="/assets/student.png"
            width={400}
            height={400}
            alt="Picture of the student"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
