"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarUser = ({ token, setToken }) => {
  const handleLogOut = async () => {
    sessionStorage.removeItem("token");
    setToken(false);
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(35deg, rgb(23, 30, 49) 0%, rgb(0, 18, 45) 45%);",
      }}
      className="flex justify-between px-8 py-2 mb-12  items-center bg-white"
    >
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
          <Link href="/" className="flex items-center">
          {" "}
          <span className="text-2xl font">Course Creator</span>
          <Image
            src="/assets/pen1.png"
            width={50}
            height={50}
            alt="pen"
          ></Image>
          
        </Link>
      </div>
      <div className="flex gap-6">
        <span className="text-white">connect me at &rarr; </span>
        <Image
          src="/assets/instagram.png"
          width={50}
          height={50}
          alt="Picture of the student"
        ></Image>
        <Image
          src="/assets/discord.png"
          width={50}
          height={10}
          alt="Picture of the student"
        ></Image>
        <Image
          src="/assets/linkedin.png"
          width={50}
          height={50}
          alt="Picture of the student"
        ></Image>
        <Image
          src="/assets/telegram.png"
          width={50}
          height={50}
          alt="Picture of the student"
        ></Image>
      </div>
    </div>
  );
};

export default NavbarUser;
