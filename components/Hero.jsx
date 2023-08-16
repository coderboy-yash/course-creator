"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ token }) => {
  return (
    <div>
      <div className="flex p-4  justify-between h-screen">
        <div className="basis-1/2 flex    flex-col">
          {token && (
            <div className="mb-14 capitalize mt-8  text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Welcome {token.user.user_metadata.full_name}
            </div>
          )}
          <div className="text-6xl mt-8 font-bold text-gray-700">
            Learn Job ready skills from{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              free
            </span>{" "}
            online courses .
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
                  Start for free
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="/assets/student.jpg"
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
