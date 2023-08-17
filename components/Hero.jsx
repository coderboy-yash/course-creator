"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ token }) => {
  return (
    <div
      className="text-white"
      style={{
        background:
          "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",
      }}
    >
      <div className="flex p-4  justify-between h-screen">
        <div className="basis-1/2 flex    flex-col">
          {token && (
            <div className="mb-14 capitalize mt-8  text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Welcome {token.user.user_metadata.full_name}
            </div>
          )}
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
            {!token && (
              <div className="mt-8">
                <Link
                  href={"/login"}
                  className="bg-orange-400 p-4 text-2xl rounded-xl text-white font-bold"
                >
                  Create for free
                </Link>
              </div>
            )}
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
